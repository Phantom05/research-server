var utils = require(global.__base__.path.utils);
var router = utils._npm_modules.express.Router();

const { Media,Sequelize:{Op} } = utils._models;
const {_} = utils._npm_modules;


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('index');
  // Media.findAndCountAll({}).then((result) => {
  //   const boardList = result.rows.map(list => list.dataValues);
  //   const body = {};
  //   body.result = 1;
  //   body.recommend = [];
  //   body.weekendPopular = {
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
  const popularWeekendMovieList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:1
    }
  });
  const popularWeekendTvList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:2
    }
  });
  const popularWeekendDramaList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:3
    }
  });
  const popularWeekendNewsList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:4
    }
  });
  const popularWeekendDocumentaryList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:5
    }
  });
  const popularWeekendVaraityShowList = Media.findAndCountAll({
    where:{
      [Op.or]:[
        {
          like_count:{[Op.gte]:3}
        }
      ],
      category_id:6
    }
  });

  Promise.all([
    recommandList, 
    popularWeekendMovieList,
    popularWeekendTvList,
    popularWeekendDramaList,
    popularWeekendNewsList,
    popularWeekendDocumentaryList,
    popularWeekendVaraityShowList,
  ])
    .then(responses => {

      const recommand                 = responses[0];
      const weekendPopularMovie       = responses[1];
      const weekendPopularTv          = responses[2];
      const weekendPopularDrama       = responses[3];
      const weekendPopularNews        = responses[4];
      const weekendPopularDacumentary = responses[5];
      const weekendPopularVaraityShow = responses[6];

      const weekendPopularList =  [].concat(
        Object.assign({category:"movie"},weekendPopularMovie),
        Object.assign({category:"tv"},weekendPopularTv),
        Object.assign({category:"drama"},weekendPopularDrama),
        Object.assign({category:"news"},weekendPopularNews),
        Object.assign({category:"dacumentary"},weekendPopularDacumentary),
        Object.assign({category:"varaityShow"},weekendPopularVaraityShow),
      );
      console.log(weekendPopularList,'weekendPopularList');


 
      _.forOwn(weekendPopularList,(value)=>{
        console.log(value);
      })

      body.result = 1;
      body.recommandMedia = recommand;
      body.weekendPopular={
        movie:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
        tv:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
        drama:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
        movie:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
        movie:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
        movie:{
          length:weekendPopularMovie.count,
          list:weekendPopularMovie.rows
        },
      }

      res.json(body)
    })
    .catch(err => {
      console.log(err, 'error');
      body.result = 2;
      res.json(body)
    });

});

module.exports = router;
