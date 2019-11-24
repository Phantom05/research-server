var utils = require(global.__base__.path.utils);
var router = utils._npm_modules.express.Router();

const { Media } = utils._models;



/* GET home page. */
router.post('/', function (req, res, next) {
  let { id, range } = req.body;
  const rangeList = [];

  if (range) {
    let rangeArr = range.split(',').map(x => +x);
    let startNum = rangeArr[0];
    let endNum = rangeArr[1];
    for (let i = startNum; i <= endNum; i++) {
      rangeList.push(i)
    }
    id = rangeList;
  }
  Media.destroy({
    where: {
      id: id,
    }
  }).then((result) => {
    console.log(result);
    console.log(result.dataValues, 'success');
    res.json({ result: 1 })
  }).catch(err => {
    console.log(err, 'error');
    res.json({ result: 2 })
  });

});

module.exports = router;
