var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
var multer = require('multer')
//if we want to connect to atlas aka online mongodb
//mongoose.connect('mongodb+srv://SuperMarioHD0:Banana123aca@cluster0.svkfmzi.mongodb.net/Orbital');
//if we want to connect to local mongo db
mongoose.connect('mongodb://localhost:27017/Orbital')

var usersRouter = require('./routes/users');
var destinationsRouter = require('./routes/destinations');
var bookingRouter = require('./routes/bookings')

var app = express();
app.use(multer({dest:'./public/uploads'}).any())
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('etag');
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/users', usersRouter);
app.use('/destinations',destinationsRouter);
app.use('/bookings',bookingRouter)

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
