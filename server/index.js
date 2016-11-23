var express = require('express'),
  app = express(),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3005,
  morgan = require('morgan'),
  busboi = require('express-busboy'),
  models = require('./models'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId;

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: false}));
busboi.extend(app, {
    upload: true
});
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Bakman Water,District,Authorization,Content-Type,text/html');
  next();
});

require('./routes')(app);
server.listen(port, function() {
  console.log('Running on port ' + port);
});