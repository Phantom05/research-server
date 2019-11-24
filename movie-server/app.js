var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var utils = require('./src/routes/utils/index');

var indexRouter = require('./src/routes/client/views/index');
var updateMediaRouter = require('./src/routes/client/update/media');
var insertMediaRouter = require('./src/routes/client/insert/media');

var deleteMediaRouter = require('./src/routes/client/delete/media');

var {sequelize} = require('./src/models/index');


var app = express();
const driver = async () => {
  try {
      await sequelize.sync({alter: true});
  } catch (err) {
      console.error('초기화 실패');
      console.error(err);
      return;
  }

  console.log('초기화 완료.');
};
driver();
 
app.use(cors());
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'config')));
// app.use(express.static(path.join(__dirname+'/routes/client/utils','/utils')));
// app.use(express.static(path.join(__dirname)));



app.use('/', indexRouter);
app.use('/update/media', updateMediaRouter);
app.use('/insert/media', insertMediaRouter);
app.use('/delete/media', deleteMediaRouter);



app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
