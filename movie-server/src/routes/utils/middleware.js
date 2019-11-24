
const {log,commandLine} = require('./common');

function wrap(asyncFn ) {
  // FIXME: Promise와 catch를 이용하면 더 간결해질 것 같습니다.
    return (async (req, res, next) => {
      try {
        log(`\n`,'green');
        log(`** Attempted Router`,'yello')
        log(commandLine,'green');
        log(` - [ ${req.method} ] ${req.originalUrl}` , 'green');
        log(commandLine,'green');
        log(`\n`,'green');
        return await asyncFn(req, res, next);
      } catch (error) {
        console.log(error.message);
        return next(error);
      }
    })  
}
exports.wrap = wrap;

/*
https://upload.wikimedia.org/wikipedia/ko/c/c3/%EB%82%B4_%EC%9D%B4%EB%A6%84%EC%9D%80_%EC%B9%B8_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg

http://demerc.kr/wp-content/uploads/2019/03/Perfectgirl_TeaserPoster-719x1024.png

https://post-phinf.pstatic.net/MjAxODEyMjdfMTU4/MDAxNTQ1ODc0MDI5MTgw.eIcD7Iur5pBrioj__2YAc_T2BwKjdhOCkHtNQAl2Yr8g.qjJBpzXi1MdI_ht9swwIb28KRZH9uwmkNnqgAiE3cwgg.JPEG/black-panther-poster.jpg?type=w1200

https://www.nemopan.com/files/attach/images/1116443/889/527/009/4b7088c29750cd9578ecaa26aae2fad4.jpg

http://imgmovie.naver.com/mdi/mi/1397/139701_P14_113141.jpg

https://img.huffingtonpost.com/asset/5d80b5123b0000039fd54536.jpeg?ops=scalefit_630_noupscale



https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F155B02014BAC4A1C10

http://dlink.kr/Humor/201811291747043841.jpg

http://img.movist.com/?img=/x00/04/78/00_p1.jpg

http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/03/12/hkUM5oI3L91t636564633519379444.jpg

http://file3.instiz.net/data/file3/2018/05/05/7/d/4/7d46befb77f3c63fa570fd8c39def7ff.jpg


https://newsimg.sedaily.com/2019/06/28/1VKLCQ532T_3.jpg

*/