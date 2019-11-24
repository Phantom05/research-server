const {
  express,
  _
} = require('./npm_modules');
const {
  // wrap
} = require('./middleware');
// const {
//   shuffleJoin,
//   calPage
// } = require('./common');
const {
  post_category_mapper,
  post_group_mapper
} = require('../lib/mapper')
const { Post } = require('../models');
var router = express.Router();



/* Board List. */
router.route('/:group/list')
  .post(async (req, res, next) => {
    const {group} = req.params;
    const { category } = req.body;
    const filter ={};
    if(category.trim() !== ''){
      filter.where = {category}
    }
    Post.findAll(filter).then((data) => {
      const body = {};
      let dataList = data.map(list => list.dataValues);
      // body.boardMenuList = _.groupBy(menuList, (list => list.category_group));
      body.list=dataList;
      res.json(body)

    }).catch(err => {
      console.log(err, 'error');
    })


  });
/* Post Upload. */
router.route('/:group/upload')
  .post(async (req, res, next) => {
    console.log('upload');
    const { group } = req.params;
    let {
      title,
      body,
      author,
      author_seq,
      category,
      image,
    } = req.body;
    let category_seq = post_category_mapper[category];
    let group_seq = post_group_mapper[group];

    Post.create({
      title,
      body,
      author,
      author_seq,
      group,
      group_seq,
      category,
      category_seq,
      image,
    }).then((board) => {
      console.log(board);
      console.log(board.dataValues, 'success');
      res.json({ result: 1 })
    }).catch(err => {
      console.log(err, 'error');
      res.json({ result: 2 })
    });

  });

// /* Board List. */
// router.route('/menu/list')
//   .post(async (req, res, next) => {
//     const { category } = req.body;
//     BoardCategory.findAll({
//       where: { category: category }
//     }).then((data) => {
//       const body = {};
//       let menuList = data.map(list => list.dataValues);

//       console.log();

//       body.boardMenuList = _.groupBy(menuList, (list => list.category_group));
//       res.json(body)

//     }).catch(err => {
//       console.log(err, 'error');
//     })

//   });

// // /study/list/56
// /* Board Get List. */
// router.route('/:category/list/:categorySeq/:page')
//   .post(wrap(async (req, res, next) => {
//     const {
//       category,
//       categorySeq: category_seq,
//       page
//     } = req.params;
//     const body = {}, limit = 10, offset = (page - 1) * limit;

//     Board.findAndCountAll({
//       offset: offset,
//       limit: limit,
//       where: {
//         category_seq,
//         category
//       }
//     }).then((result) => {
//       const boardList = result.rows.map(list => list.dataValues)
//       body.result = 1;
//       body.boardList = boardList;
//       body.pagination = calPage(page, result.count)
//       res.json(body)

//     }).catch(err => {
//       console.log(err, 'error');
//       res.json({ result: 2 })
//     })

//   }));

// /* Board Data Upload. */
// router.route('/:category/upload')
//   .post(async (req, res, next) => {
//     console.log('upload');
//     const { category } = req.params;
//     let {
//       author,
//       authorSeq: author_seq,
//       title,
//       body,
//       privacy,
//       categorySeq: category_seq
//     } = req.body;
//     // title = title+ Math.random

//     title = shuffleJoin('ABCDEFG123456789');
//     body = shuffleJoin('ABCDEFG123456789');

//     Board.create({
//       author,
//       author_seq,
//       privacy,
//       title,
//       body,
//       category,
//       category_seq
//     }).then((board) => {
//       console.log(board);
//       console.log(board.dataValues, 'success');
//       res.json({ result: 1 })
//     }).catch(err => {
//       console.log(err, 'error');
//       res.json({ result: 2 })
//     });

//   });


// /* Board Create. */
// router.route('/create')
//   .post(async (req, res, next) => {
//     const { title, author, content, authorSeq, private } = req.body;

//     Board.create({
//       title: title,
//       body: content,
//       author: author,
//       authorSeq: authorSeq,
//       private: private
//     }).then((board) => {
//       console.log(board);
//       console.log(board.dataValues, 'success');
//       res.json({ result: 1 })
//     }).catch(err => {
//       console.log(err, 'error');
//       res.json({ result: 2 })
//     });

//   });

// /* Board List. */
// router.route('/:category/:part/:list')
//   .get(async (req, res, next) => {

//   })
//   .post(async (req, res, next) => {

//   });


// /* Board Detail. */
// router.route('/:category/:part/:list')
//   .get(async (req, res, next) => {

//   })
//   .post(async (req, res, next) => {

//   });






module.exports = router;

