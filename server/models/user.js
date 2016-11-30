var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  firstName: String,
  lastName: String,
  userType: {type: mongoose.Schema.Types.ObjectId, ref: 'UserType'},
  email: String,
  password: {type: String, select: false},
  midwife: {type: mongoose.Schema.Types.ObjectId, ref: 'Midwife'},
  createdAt: {type: Date, default: Date.new},
  updatedAt: {type: Date, default: Date.new}
});

module.exports = mongoose.model('User', schema);
