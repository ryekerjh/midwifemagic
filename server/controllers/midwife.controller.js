var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId;


//Get All Notes
controller.getAllMidwives = function(req, res) {
  console.log('its not all dead');
  models.Midwife.find({}).exec(function(err, midwives) {
    console.log(err);
    console.log(midwives);
    res.send(midwives);
  });
}

controller.createMidwife = function(req, res) {
  console.log('req.body', req.body);
  var midwife = req.body;
  var newMidwife = new models.Midwife({
        firstName: midwife.firstName,
        lastName: midwife.lastName,
        email: midwife.email,
        phone: midwife.phone,
        insurance: midwife.insurance,
      })
  newMidwife.save(function (err) {
    if (err) {
      console.log(err);
      return
    }
    res.json({
      message: "Your Role has been created.",
      midwife: newMidwife
    })
  })
}