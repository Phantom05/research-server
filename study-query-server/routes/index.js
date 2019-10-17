var express = require('express');
var router = express.Router();
var {db} = require('../database/mysql/mysql');



function result(err,rows){
  if(err) throw err;
  // console.log(rows);
  console.log(JSON.parse(JSON.stringify(rows)));
}

function query(queryState){
  db.query(queryState,result)
}

// db.query(`SELECT * FROM person`,(err,rows,fileds)=>{
//   if(err) throw err;
//   console.log(rows);
// });

// db.query(`CREATE table foo (hobby varchar(255), address varchar(255))`,(err,result)=>{
//   if(err) throw err;
//   console.log(result);
// })

// person 테이블의 모든걸 가져올건대 left join을 쓸거다 foo에서 가져올건대
// person id와 foo id 가 같을떄.


// db.query(`SELECT * from person left join foo on person.id = foo.id`,result);
// db.query(`select name as nickname from person`,result); // name을 nickname으로 바꿔서 가져옴.
// db.query(`select * from person where age > 20`,result);
// db.query(`delete from foo where id =4`,result);
// db.query(`update foo SET hobby='wow~' where id=5`,result);
// db.query(`alter table foo change address email varchar(45)`,result); // address => email 컬럼 명 변경
// db.query(`alter table foo change email address varchar(45)`,result); // email => address 컬럼 명 변경
// db.query(`alter table foo ADD test int DEFAULT 123`,result);
// db.query(`delete from foo where test=123`,result); // 컬럼 test가 123인 모든 rows를 삭제
// db.query(`alter table foo drop test`,result);
// query(`alter table foo change wow address varchar(45)`);
// db.query(`insert into foo values ()`)

// query(`select * from foo limit 10`);
// query(`alter table foo add name varchar(40)`);
// query(`alter table foo ADD age int`);
// query(`ALTER TABLE foo drop created`);
// query(`select NOW()`)

// query(`delete from foo where id > 110`)

// query(`ALTER TABLE person ADD level int default 1`);
// query(`SELECT * FROM foo JOIN person`); // foo 를 가져오는데 person을 붙혀서 가져와라, person이 덮어쓰기함.
// query(`insert into foo (name,id) values ('쯔녕쓰',1)`);


/**
 * Join 기본
 */
// 모든 정보를 하나의 테이블 처럼 가져올건대, foo 테이블과 person 테이블을 합쳐서 가져옵니다.
// query(`
//   SELECT * FROM foo JOIN person
// `);


/**
 * INNER JOIN 기본
 */
// JOIN에서는 명시적 조인 표현인 아래와 같이 JOIN키워드를 써서 조인 하는 방법이 있습니다.
// foo테이블과 person 테이블을 가져올건대 foo테이블의 id와 person 테이블의 id가 같은 정보만 가져옵니다.
// query(`
//   SELECT * FROM foo INNER JOIN person ON foo.id = person.id
// `);
// // 아래와 같이도 JOIN을 사용할수 있습니다. 이를 암시적 조인 표현이라고 합니다.
// query(`
//   SELECT * FROM foo, person WHERE foo.id = person.id
// `);
// // 아래와 같이 =를 사용해서 JOIN의 모든 값을 조건에 맞게 가져오는 방법도 있습니다. 이를 동등조인(equi join) 이라고 합니다.
// query(`
//   SELECT * FROM foo JOIN person ON foo.id = person.id
// `);

// 아래와 같이 from 뒤에 as와 join 뒤에 as로 이름을 줄여서 사용할 수도 있습니다.
query(`
  SELECT P.id FROM foo as F LEFT JOIN person as P ON F.id = P.id
`)



//  JOIN ==> 2가지 이상을 가져와야하니까 기본적으로 아래와 같이 쓰게됨.
// person 테이블의 name을 이름으로, person 테이블의 age를 나이로 , foo 테이블의 address 칼럽을 이메일로 가져올건대
// foo 테이블 뒤로 person이 덮어써서 가져온다
// 조건은 foo의 id와 person의 id가 같을때.
// query(`
//   SELECT 
//     person.name AS 이름 ,
//     person.age AS 나이 , 
//     foo.address AS 이메일 
//   FROM foo JOIN person 
//   ON foo.id = person.id
// `);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Database Server' });
});

module.exports = router;


// for(let i = 0 ; i < 100; i++){
//   db.query(`INSERT INTO foo (hobby, address) VALUES ('coding${i}','test${i}@te.com') `,result)
// }