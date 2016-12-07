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

//MIDWIFE ROUTES
    router.route('/midwives')
      .get(controllers.midwife.getAllMidwives)
      .post(controllers.midwife.createMidwife)
    router.route('/midwife/:id')
      .get(controllers.midwife.getOneMidwife)
    router.route('/my-midwife')
      .get(controllers.midwife.getMyMidwife)

//PROVIDER ROUTES
    router.route('/providers')
      .post(controllers.provider.createProvider)
      .get(controllers.provider.getAllProviders)
    router.route('/provider/:id')
      .get(controllers.provider.getOneProvider)

//USERTYPE
    router.route('/user-type')
      .post(controllers.userType.createUserType)

//AUTH
    router.route('/authenticate')
      .post(controllers.user.authenticate)
    router.route('/register')
      .post(controllers.user.registerUser)

//SCHEDULE
    router.route('/schedule')
      .get(controllers.event.getMySchedule)
      .post(controllers.event.createEvent)


    app.use('/api', router);
}    