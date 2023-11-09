var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var bookRouter = require('./routes/Book')
var book = require('./models/book')
var resourceRouter = require('./routes/resource')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter);

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

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await book.deleteMany();
let instance1 = new book({Author: "Harper Lee",book_name:"To Kill a Mockingbird", book_cost:1000});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});



let instance2 = new book({Author: "F. Scott Fitzgerald",book_name:"The Great Gatsby", book_cost:2000});
instance2.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new book({Author: "J.D. Salinger",book_name:"The Catcher in the Rye", book_cost:3000});
instance3.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

}
let reseed = true;
if (reseed) {recreateDB();}