var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  config = require('../config');
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt-nodejs'),
  ObjectId = require('mongoose').Types.ObjectId;

controller.authenticate = function(req, res) {
  console.log(req.body)
  models.User.findOne({email: req.body.email}).select('+password').exec(function(err, user) {
    if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, response) {
        if (response) {
          var token = jwt.sign({email: user.email, _id: user._id, firstName: user.firstName, lastName: user.lastName}, config.JWT_SECRET);
          models.User.update({_id: user._id}, { $set: {loginToken: token} }, {}, function(err, users) {
            if (!err) {
              res.json({
                message: 'authenticated',
                token: token,
                user: user
              });
            } else {
              res.json({
                error: err
              })
            }
          })
        } else {
          res.json({
            message: 'Passwords do not match',
            erros: err
          })
        }
      });
    } else {
      res.json({
        error: err
      })
    }
  })
}

controller.registerUser = function(req, res) {
  var thisUser = req.body.user;
  console.log(thisUser);
  var newUser = {
    firstName: thisUser.firstName,
    lastName: thisUser.lastName,
    password: thisUser.password,
    email: thisUser.email,
    // userType: new ObjectId(thisUser.userType),
    midwife: new ObjectId(thisUser.midwife)
  }
  console.log('==============================');
  console.log(newUser);
  console.log('==============================');
  var token = jwt.sign(newUser, config.JWT_SECRET);
  bcrypt.hash(newUser.password, null, null, function(err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.json({error: err})
    } else {
      var user = new models.User({
        password: hash,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        userType: newUser.userType,
        midwife: newUser.midwife
      })

      user.save(function(err) {
        if (err) {
          res.json({
            message: err + ' error was thrown'
          })
        } else {
          res.json({
            message: 'User created',
            user: user,
            token: token
          })
        }
      })
    }
  });
}