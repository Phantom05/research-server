var utils = require(global.__base__.path.utils);
var router = utils._npm_modules.express.Router();

const {Media} = utils._models;



/* GET home page. */
router.get('/', function(req, res, next) {

  // Media.findAndCountAll({}).then((result) => {
  //   const boardList = result.rows.map(list => list.dataValues);
  //   const body = {};
  //   body.result = 1;
  //   body.recommend = [];
  //   body.weekend = {
  //     movie:boardList,
  //     tv:boardList,
  //     varaityShow:boardList,
  //     drama:boardList,
  //     news:boardList,
  //     documentary:boardList,
  //   };
  //   body.replay = {
  //     action:[],
  //     drama:[],
  //     thriller:[],
  //     war:[],
  //     sf:[],
  //   };
  //   body.visit={
  //     today:1258,
  //     yesterady:6844,
  //     total:243
  //   }
  //   // body.pagination = calPage(page, result.count)
  //   res.json(body)

  // }).then(()=>{

  // }).catch(err => {
  //   console.log(err, 'error');
  //   res.json({ result: 2 })
  // });

  const test1 = Media.findAndCountAll({});
  const test2 = Media.findAndCountAll({});

  Promise.all([test1,test2])
  .then(responses =>{
    console.log(responses);
    res.json({ result: 1 })
  })
  .catch(err => {
      console.log(err, 'error');
      res.json({ result: 2 })
  });

});

module.exports = router;
