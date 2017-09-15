var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var basicAuth = require("basic-auth");
var ADMIN = require('./config').ADMIN;
var PASSWORD = require('./config').PASSWORD;

var index = require('./routes/index');
var banner = require('./routes/banner');
var song = require('./routes/song');
var exsong = require('./routes/exsong');
var sheet = require('./routes/sheet');
var exsheet = require('./routes/exsheet');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var auth = function(req, resp, next) {
  function unauthorized(resp) {
    resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
    return resp.sendStatus(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(resp);
  }

  if (user.name === ADMIN && user.pass === PASSWORD) {
    return next();
  } else {
    return unauthorized(resp);
  }
};

app.post('*', auth, function(req, resp,next) {
  next()
});

app.get('*', auth, function(req, resp,next) {
  next()
});

app.use('/', index);
app.use('/banner', banner);
app.use('/song', song);
app.use('/exsong', exsong);
app.use('/sheet', sheet);
app.use('/exsheet', exsheet);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
