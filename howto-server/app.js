var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./src/routes/index');
var postRouter = require('./src/routes/post');
// var usersRouter = require('./routes/users');
// var authRouter = require('./routes/auth');
// var boardRouter = require('./routes/board');

// var adminBoardRouter = require('./routes/admin/board');

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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'config')));
app.use(express.static(path.join(__dirname)));

app.use('/', indexRouter);
app.use('/post', postRouter);


// app.use('/users', usersRouter);
// app.use('/auth', authRouter);
// app.use('/board', boardRouter);

// app.use('/admin/board', adminBoardRouter);




// app.get('*', (req, res) => {
//   console.log('ff');
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
// });

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
