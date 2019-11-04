
var express = require('express');
var router = express.Router();
const { Board,BoardCategory } = require('../models');
const uuidv4 = require('uuid/v4');
var _ = require('lodash');


/* Board List. */
router.route('/menu/list')
  .post(async (req, res, next) => {
    const {category} = req.body;
    BoardCategory.findAll({
      where:{category:category}
    }).then((data)=>{
      const body ={};
      let menuList = data.map(list=> list.dataValues);

      console.log();

      body.boardMenuList = _.groupBy(menuList,(list=>list.category_group));
      res.json(body)

    }).catch(err=>{
      console.log(err,'error');
    })

  });

  // /study/list/56
/* Board Get List. */
router.route('/:category/list/:categorySeq')
.post(async (req, res, next) => {
  console.log('upload !!!!!');
  const {category,categorySeq:category_seq} = req.params;
  const body ={};
  Board.findAll({
    where:{
      category_seq,
      category
    }
  }).then((board) => {
    let boardList = board.map(list=>{
      return list.dataValues
    })
    //NOTE: 데이터 떨구기
    body.result = 1;
    body.boardList = boardList;
    res.json(body)
  }).catch(err => {
    console.log(err, 'error');
    res.json({ result: 2 })
  });

});

/* Board Data Upload. */
router.route('/:category/upload')
.post(async (req, res, next) => {
  console.log('upload');
  const { author,authorSeq:author_seq,title,body,privacy,categorySeq:category_seq } = req.body;
  const {category} = req.params;

  Board.create({
    author,
    author_seq,
    privacy,
    title,
    body,
    category,
    category_seq
  }).then((board) => {
    console.log(board);
    console.log(board.dataValues, 'success');
    res.json({ result: 1 })
  }).catch(err => {
    console.log(err, 'error');
    res.json({ result: 2 })
  });

});


/* Board Create. */
router.route('/create')
  .post(async (req, res, next) => {
    const {title,author,content,authorSeq,private} = req.body;

    Board.create({
      title:title,
      body:content,
      author:author,
      authorSeq:authorSeq,
      private:private
    }).then((board)=>{
      console.log(board);
      console.log(board.dataValues,'success');
      res.json({result:1})
    }).catch(err=>{
      console.log(err,'error');
      res.json({result:2})
    });

  });

/* Board List. */
router.route('/:category/:part/:list')
  .get(async (req, res, next) => {

  })
  .post(async (req, res, next) => {

  });


/* Board Detail. */
router.route('/:category/:part/:list')
  .get(async (req, res, next) => {

  })
  .post(async (req, res, next) => {

  });



module.exports = router;





   //메인
    //board/sec1/part0/list0
    //board/study/part1/
    //리스트파트들
    //board/sec1/part1/list1?page=1