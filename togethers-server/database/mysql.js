var mysql = require('mysql');
var moment = require('moment');
const envs = require('../config');

var db = mysql.createConnection({
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_DATABASE
});
db.connect();


function query(queryState,callback = ()=>{}){
  console.log('\nQuery');
  console.log(moment().format('YYYY MM DD hh:mm:ss'));
  db.query(queryState,(err,rows)=>{
    if(err) throw err;
    let result = JSON.parse(JSON.stringify(rows));
    console.log(result,'result');
    callback(result)
  })
}


exports.db = db;
exports.query = query;