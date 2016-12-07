var controller = module.exports = {},
  models = require('../models'),
  mongoose = require('mongoose'),
  config = require('../config'),
  ObjectId = require('mongoose').Types.ObjectId;

controller.createEvent = function(req, res) {
  console.log('req.body', req.body);
  var event = req.body;
  var newEvent = new models.Event({
        time: event.time,
        location: event.location,
        type: event.type,
        title: event.title,
        duration: event.duration,
        participants: event.participants
      })
  newEvent.save(function (err) {
    if (err) {
      console.log(err);
      return
    }
    res.json({
      event: newEvent
    })
  })
}

controller.getMySchedule = function(req, res) {
  let thisUser = req.query.id;
  models.User.findOne({_id: thisUser}).populate('schedule').exec(function(err, user) {
    if(user){
      let mySchedule = user.schedule;
      res.json({
        schedule: mySchedule
      })
    } else if(err){
      res.json({
        message: "looks like you encountered error " + err,
        error: err
      })
    }
  })
}