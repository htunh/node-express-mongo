require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongooseMorgan = require('mongoose-morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');

require('./db');
var app = express();

app.use(cors);

// app.use(logger('combined'));
app.use(
  mongooseMorgan(
    {
      collection: 'logger',
      connectionString: 'mongodb://ds123614.mlab.com:23614/logger',
      user: 'root',
      pass: 'root123',
    },
    {},
    'combined'
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);

module.exports = app;
