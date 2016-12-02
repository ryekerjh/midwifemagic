var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId;


controller.getAllMidwives = function(req, res) {
  models.Midwife.find({}).exec(function(err, midwives) {
    console.log(err);
    console.log(midwives);
    res.send(midwives);
  });
}

controller.getOneMidwife = function(req, res) {
  models.Midwife.findOne({_id: req.params.id}).exec(function(err, midwife) {
    if (err) {
      res.send(err)
    } else {
      res.send(midwife);
    }
  })
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
        certification: midwife.certification,
        providers: new Object(midwife.providers)
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