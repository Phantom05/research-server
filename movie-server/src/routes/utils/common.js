const {
  util,
  _
} = require('./npm_modules');


let resetColor = "\x1b[0m";
let clc = {
  bright: `\x1b[1m%s${resetColor}`,
  dim: `\x1b[2m%s${resetColor}`,
  underscore: `\x1b[4m%s${resetColor}`,
  blink: `\x1b[5m%s${resetColor}`,
  reverse: `\x1b[7m%s${resetColor}`,
  Hidden: `\x1b[8m%s${resetColor}`,
  black: `\x1b[30m%s${resetColor}`,
  red: `\x1b[31m%s${resetColor}`,
  green: `\x1b[32m%s${resetColor}`,
  yello: `\x1b[33m%s${resetColor}`,
  blue: `\x1b[34m%s${resetColor}`,
  magenta: `\x1b[35m%s${resetColor}`,
  cyan: `\x1b[36m%s${resetColor}`,
  white: `\x1b[37m%s${resetColor}`,
  bgBlack: `\x1b[40m%s${resetColor}`,
  bgRed: `\x1b[41m%s${resetColor}`,
  bgGreen: `\x1b[42m%s${resetColor}`,
  bgYellow: `\x1b[43m%s${resetColor}`,
  bgBlue: `\x1b[44m%s${resetColor}`,
  bgMagenta: `\x1b[45m%s${resetColor}`,
  bgCyan: `\x1b[46m%s${resetColor}`,
  bgWhite: `\x1b[47m%s${resetColor}`,
};



const commandLine = `==============================================================`;


function log(txt, color,bool = false) {
  if(!color){
    if(bool === true){
      console.log(util.inspect(txt, false, null, true ));
    }else{
      console.log(txt);
    }
  }else{
    color = color || 'bright'
    console.log(clc[color], txt);
  }

}
// GENRES
// Action
// Anime
// Classics
// Comedy
// Crime TV
// Documentary
// Docuseries
// Drama
// Faith
// Family Movies
// Foreign Language Films
// Foreign Language TV
// Horror
// Indie Films
// Kids Shows
// Lifestyle
// Martial Arts
// Music & Musicals
// Para niños y familias
// Películas en Español
// Preschool
// Reality TV
// Romance
// Sci-fi & Fantasy
// Sports Movies & Shows
// Stand Up Comedy
// Telenovelas y series
// Thrillers
// TV Comedies
// TV Dramas
// Westerns

const mediaCategory = {
  '1':'영화',
  '2':"tv",
  "3":"드라마",
  '4':"뉴스",
  "5":'다큐멘터리',
  "6":"예능"
}
const movieCategory ={
  '1':'액션',
  '2':''
}

function shuffleJoin(o){
  if(typeof o == 'string'){
    return o.split('').sort(function(){return 0.5-Math.random()}).join('')
  }
  o.sort(function(){return 0.5-Math.random()});
  return o.join('');
}

function calPage(page, totalCount) {
  var page_size = 5;
  //페이징의 갯수 : 1 ~ 10개 페이지
  var page_rows_size = 10;
  // 페이지 row의 개수

  let totalPageCount = totalCount; // 전체 rows 개수
  let curPage = page;
  if (totalPageCount < 0) totalPageCount = 0;

  var totalPage = Math.ceil(totalPageCount / page_rows_size); // 전체 페이징 수
  if (totalPage < page_size) {
    page_size = totalPage;
  }
  var totalSet = Math.ceil(totalPage / page_size);
  var curSet = Math.ceil(curPage / page_size)
  var startPage = ((curSet - 1) * page_size) + 1
  var endPage = (startPage + page_size) - 1;
  if (totalPage < endPage) {
    endPage = totalPage
  }
  if (curPage < 0) {
    no = 0
  } else {
    no = (curPage - 1) * 10
  }

  return {
    page: +curPage,
    page_rows_size,
    totalPage,
    startPage,
    endPage
  };;
}

async function boardListPageQuery(page, callback) {
  // Board.findAll


  return await query(`SELECT COUNT(*) as cnt FROM board`, (result) => {
    var page_size = 5;
    //페이징의 갯수 : 1 ~ 10개 페이지
    var page_rows_size = 10;
    // 페이지 row의 개수

    let totalPageCount = result[0].cnt;
    let curPage = page;
    if (totalPageCount < 0) totalPageCount = 0;

    var totalPage = Math.ceil(totalPageCount / page_rows_size); // 전체 페이징 수
    if (totalPage < page_size) {
      page_size = totalPage;
    }
    var totalSet = Math.ceil(totalPage / page_size);
    var curSet = Math.ceil(curPage / page_size)
    var startPage = ((curSet - 1) * page_size) + 1
    var endPage = (startPage + page_size) - 1;
    if (totalPage < endPage) {
      endPage = totalPage
    }
    if (curPage < 0) {
      no = 0
    } else {
      no = (curPage - 1) * 10
    }
    var result2 = {
      page: +curPage,
      page_rows_size,
      page_size,
      totalPage,
      totalSet,
      curSet,
      startPage,
      endPage
    };
    callback(result2)
  })

}





exports.log         = log;
exports.commandLine = commandLine;
exports.shuffleJoin = shuffleJoin;
exports.calPage     = calPage;
exports.mediaCategory = mediaCategory;
