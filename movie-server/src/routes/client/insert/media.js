var utils = require(global.__base__.path.utils);
var router = utils._npm_modules.express.Router();

const {Media} = utils._models;
const {wrap} = utils._middleware;

/* GET home page. */
router.post('/', wrap (async (req, res, next) => {
  const {
    image_large,
    image_medium,
    image_small,
    summary,
    category_id,
    director,
    running_time,
    screen_grade,
    release_date,
    like_count,
    links:_links,
    cast:_cast,
    gerne:_gerne,
  } = req.body;

  let ramdomNumber = Math.ceil(Math.random()*10);
  let _author = `admin`;
  let author_id = utils._npm_modules.uuidv4().split('-').join('');
  let _category = utils._common.mediaCategory[category_id];
  let _title = `타이틀 ${ramdomNumber}`;
  let _image_large = image_large;
  let _image_medium = image_medium;
  let _image_small = image_small;
  let status = 1;

  let links = [
    {
      title:"MixDrop",
      link:`https://foxdown.club/view.php?id=40`
    },
    {
      title:"RapidVideo",
      link:`http://dongchi.me/main.php?q=https://mixdrop.co/e/vlt1lw&t=MixDrop`
    },
    {
      title:"GoUnlimitted",
      link:`http://dongchi.me/main.php?q=https://mixdrop.co/e/vlt1lw&t=MixDrop`
    },
    {
      title:"VidLox",
      link:`http://dongchi.me/main.php?q=https://mixdrop.co/e/vlt1lw&t=MixDrop`
    },
  ];
  let gerne = [
    'drama','mystery','horror'
  ];
  let cast = [
    '저스틴 고든', '더그 존스', '사이몬 필립스'
  ];

    Media.create({
      title:_title,
      summary:summary,
      author:_author,
      author_id:author_id,
      director:director,
      image_large:_image_large,
      image_medium:_image_medium,
      image_small:_image_small,
      running_time:running_time,
      screen_grade:screen_grade,
      status:status,
      release_date:release_date,
      category:_category,
      like_count:like_count,
      category_id:category_id,
      links:JSON.stringify(links),
      gerne:JSON.stringify(gerne),
      cast:JSON.stringify(cast),
    }).then((result) => {
      console.log(result);
      console.log(result.dataValues, 'success');
      res.json({ result: 1 })
    }).catch(err => {
      console.log(err, 'error');
      res.json({ result: 2 })
    });
  

    
    let _summary = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt harum officiis dicta ad libero perspiciatis, distinctio atque mollitia placeat reiciendis pariatur adipisci dignissimos facere. Esse totam qui ipsum dolores voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt harum officiis dicta ad libero perspiciatis, distinctio atque mollitia placeat reiciendis pariatur adipisci dignissimos facere. Esse totam qui ipsum dolores voluptates.`;
    let _director = '퍼렐 길';
    let _running_time = `1시간 30분`
    let _screen_grade = `19`;
    let comment_count = 0;
    let _release_date = '2017.09.21';
  
  }));

module.exports = router;
