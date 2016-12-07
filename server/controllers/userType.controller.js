var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  config = require('../config');


controller.createUserType = function(req, res) {
  console.log('req.body', req.body);
  var userType = req.body;
  var newUserType = new models.UserType({
       name: userType.name
      })
  newUserType.save(function (err) {
    if (err) {
      console.log(err);
      return
    }
    res.json({
      userType: newUserType
    })
  })
}