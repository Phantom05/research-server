var express = require('express');
var router = express.Router();
var {query} = require('../database/mysql');
const uuidv4 = require('uuid/v4');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login')
.post(async (req, res, next) => {
  console.log('login');
  const {email,password} = req.body;
  const body={}
  query(`select * from users where email='${email}' and password='${password}'`,(result)=>{
    
    if(result.length === 0){
      res.json({result:2})
    }else{
      let token = uuidv4();
      token = token.split('-').join('')
      body.token = token;
      body.profile = result[0];
      body.result = 1;
      console.log(body);
      res.json(body)
    }

    
  })

  
});

module.exports = router;
