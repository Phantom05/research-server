var utils = require(global.__base__.path.utils);
var router = utils._npm_modules.express.Router();

const { Media,Sequelize:{Op} } = utils._models;



/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('index');
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

  const body = {};
  const recommandList = Media.findAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ] 
    }
  });
  const test2 = Media.findAndCountAll({});

  Promise.all([recommandList, test2])
    .then(responses => {

      body.result = 1;
      body.recommandMedia = responses[0];
      console.log(responses);
      res.json(body)
    })
    .catch(err => {
      console.log(err, 'error');
      body.result = 2;
      res.json(body)
    });

});

module.exports = router;
