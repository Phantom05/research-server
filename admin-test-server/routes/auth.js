var express = require('express');
var router = express.Router();
var { query } = require('../database/mysql');
const uuidv4 = require('uuid/v4');
var _ = require('lodash');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login')
  .post(async (req, res, next) => {
    console.log('login');
    const { email, password } = req.body;
    const body = {}
    query(`select * from users where email='${email}' and password='${password}'`, (result) => {

      if (result.length === 0) {
        res.json({ result: 2 })
      } else {
        result[0] = _.omit(result[0], ['password'])
        body.token = result[0].token;

        body.profile = result[0];
        body.result = 1;
        console.log(body);
        res.json(body)
      }
    })
  });

router.route('/logout')
  .get(async (req, res, next) => {
    console.log('logout');
    console.log('세션 파괴 ');
    res.json({result:1})
  });

router.route('/token')
  .post(async (req, res, next) => {
    console.log('token');
    console.log(req.body);
    const { token } = req.body;
    const body = {}
    query(`select * from users where token='${token}'`, (result) => {

      if (result.length === 0) {
        res.json({ result: 2 })
      } else {
        body.profile = result[0];
        body.result = 1;
        console.log(body);
        res.json(body)
      }
    })
  });



router.route('/delete')
  .post(async (req, res, next) => {
    console.log('delete');
    console.log(req.body);
    const { token } = req.body;
    query(`delete from users where token='${token}' `, (result) => {
      if (result.length === 0) {
        res.json({ result: 2 })
      } else {
        res.json({ result: 1 })
      }
    })
  });


// router.route('/signup')
//   .post(async (req, res, next) => {
//     console.log('signup');
//     const { email, password } = req.body;
//     const body = {}
//     let token = await uuidv4();
//     token = token.split('-').join('');
//     console.log('\n');
//     console.log(token, '****');
//     console.log(email, password);

//     await query(`INSERT INTO users (email,password,token) VALUES ('${email}', '${password}','${token}')`, (result) => {
//       if (result.length === 0) {
//         res.json({ result: 2 })
//       } else {
//         res.json({ result: 1 })
//       }
//     })
//   });


/**
 * ROUTER: 백엔드 회원가입 
 *  // 1번은 회원 가입 완료
    // 2번은 뭐인가 떄문에 에러.
    // 4번은 중복체크 
 */
router.route('/signup')
  .post(async (req, res, next) => {
    const {email,password,username} = req.body;
    console.log(req.body);
    let body = {}
    query(`select * from users where email="${email}"`, (results) => {
      console.log(results);
      if (results.length > 0) {
        res.json({ result: 4 })
      } else {
        console.log('ionin');
        let token = uuidv4();
        token = token.split('-').join('');
        //회원가입 데이터베이스
        query(`insert into users (email, password, username, token)  
          values ( "${email}", "${password}", "${username}" ,"${token}")`,
          function (results) {

            if(results.affectedRows === 1){
              body.result = 1;
              body.profile = {}
              body.profile.email = email;
              body.profile.token = token;
              body.profile.username = username;
            }else{
              body.result = 2;
            }
            res.json(body)
          })

      }
    });
  });


module.exports = router;
