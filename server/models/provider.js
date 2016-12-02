var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  name: String,
  providerGroup: String,
  address: String,
  phone: String,
  email: String,
  doctors: Array,
  midwives:  Array,
  createdAt: {type: Date, default: Date.new},
  updatedAt: {type: Date, default: Date.new}
});

module.exports = mongoose.model('Provider', schema);
