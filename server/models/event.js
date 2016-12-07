var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  time: Date,
  location: String,
  type: {type: mongoose.Schema.Types.ObjectId, ref:'eventType'},
  title: String,
  duration: String,
  participants: [{type: mongoose.Schema.Types.ObjectId, ref:'user'}],
  createdAt: {type: Date, default: Date.new},
  updatedAt: {type: Date, default: Date.new}
});

module.exports = mongoose.model('Event', schema);
