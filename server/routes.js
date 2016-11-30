module.exports = function(app) {
  var router = require('express').Router(),
      controllers = require('./controllers'),
      // middleware = require('./middleware'),
      mongoose = require('mongoose')
      config = require('./config'),
    //   helper = require('./helper');

  mongoose.connect(config.MONGODB_URL);
  mongoose.connection.on('connected', function () {
    console.log('hey buddy im on it!');
  })


    router.route('/midwives')
      .get(controllers.midwife.getAllMidwives)
      .post(controllers.midwife.createMidwife)

    app.use('/api', router);
}