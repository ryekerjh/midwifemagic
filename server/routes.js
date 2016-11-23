module.exports = function(app) {

  var router = require('express').Router(),
      // controllers = require('./controllers'),
      // middleware = require('./middleware'),
      mongoose = require('mongoose')
      config = require('./config'),
      // sequelize = require('sequelize'),
      // helper = require('./helper');

  // mongoose.connect(config.MONGODB_URL);
  // mongoose.connection.on('connected', function () {
  //   console.log('hey buddy im on it!');
  // })

    app.use('/api', router);
}