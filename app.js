//importação
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { default: AdminBro } = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

//importando os comportamentos de cross origin


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const serviceRouter = require('./routes/services');
const categoriesRouter = require('./routes/categories');
const schedulesRouter = require('./routes/schedules');

const rotaTesteRouter = require('./routes/rotaTeste');

var app = express(); //biblioteca do express
// var dir = path.join(__dirname, 'public');
// app.use(express.static(dir))
const admin = new AdminBro(options);
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router);

app.use('/files', express.static(path.resolve(__dirname, '.', 'storage')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/services', serviceRouter);
app.use('/categories', categoriesRouter);
app.use('/schedules', schedulesRouter);
//app.use('/rotaTeste', serviceRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
