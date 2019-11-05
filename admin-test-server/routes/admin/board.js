
var express = require('express');
var router = express.Router();
const { BoardCategory } = require('../../models');
const uuidv4 = require('uuid/v4');
var _ = require('lodash');

/* Board Categoryt List Upload. */
router.route('/category/list/upload')
  .post(async (req, res, next) => {
    const { title, category, category_group,group_name,category_en } = req.body;
    console.log(req.body);
    //  강남/서초,
    //  관악/동작,
    //  영등포/구로/금천구,
    //  강서구/양천구,
    //  서대문/은평구,
    //  마포구/용산구,
    if (Array.isArray(title)) {
      console.log(title, `titletitletitle`);
      console.log(category_group, 'category_group');
      console.log(category, 'category');

      title.map(listTitle => {
        console.log(listTitle);

          BoardCategory.create({
          title:listTitle,
          category:category,
          category_group:category_group,
          group_name:group_name,
          category_en:category_en
        }).then((board)=>{
          console.log(board.dataValues,'success');
          // res.json({result:1})
        }).catch(err=>{
          console.log(err,'error');
          // res.json({result:2})
        });
      })

    }
  });

/* Board Categoryt List Delete. */
router.route('/category/list/delete')
  .post(async (req, res, next) => {
    console.log('delete');
    const { title, category, id } = req.body;

    BoardCategory.destroy({
      where: {
        id: id,

      }
    }).then((board) => {
      console.log(board);
      console.log(board.dataValues, 'success');
      res.json({ result: 1 })
    }).catch(err => {
      console.log(err, 'error');
      res.json({ result: 2 })
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