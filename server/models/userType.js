var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
  });

module.exports = mongoose.model('UserType', schema);
