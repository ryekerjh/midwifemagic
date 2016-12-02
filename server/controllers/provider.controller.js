var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId;

controller.createProvider = function(req, res) {
  console.log('req.body', req.body);
  var provider = req.body;
  var newProvider = new models.Provider({
        name: provider.name,
        providerGroup: provider.group,
        address: provider.address,
        phone: provider.phone,
        email: provider.email,
        doctors: provider.doctors,
        midwives: provider.midwives
      })
  newProvider.save(function (err) {
    if (err) {
      console.log(err);
      return
    }
    res.json({
      message: "Your Role has been created.",
      provider: newProvider
    })
  })
}

controller.getAllProviders = function(req, res) {
  models.Provider.find({}).exec(function(err, providers) {
    res.send(providers);
  });
}

controller.getOneProvider = function(req, res) {
  console.log('got to back end contrl', req.params)
  models.Provider.findOne({_id: req.params.id}).exec(function(err, provider) {
    if(err) {
      console.log(err)
    } else {
      console.log(provider)
      res.send(provider)
    }
  })
}

  