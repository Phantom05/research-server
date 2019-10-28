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
    console.log('세션 파괴');
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


router.route('/signup')
  .post(async (req, res, next) => {
    console.log('signup');
    const { email, password } = req.body;
    const body = {}
    let token = await uuidv4();
    token = token.split('-').join('');
    console.log('\n');
    console.log(token, '****');
    console.log(email, password);

    await query(`INSERT INTO users (email,password,token) VALUES ('${email}', '${password}','${token}')`, (result) => {
      if (result.length === 0) {
        res.json({ result: 2 })
      } else {
        res.json({ result: 1 })
      }
    })
  });

module.exports = router;
