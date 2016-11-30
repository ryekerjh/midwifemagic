var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  specialties: String,
  firstName: String,
  lastName: String,
  certification: {type: mongoose.Schema.Types.ObjectId, ref:'Certification'},
  userType: {type: mongoose.Schema.Types.ObjectId, ref: 'UserType'},
  email: String,
  phone: String,
  providers: [{type: mongoose.Schema.Types.ObjectId, ref:'Provider'}],
  insurance: Boolean,
  createdAt: {type: Date, default: Date.new},
  updatedAt: {type: Date, default: Date.new}
});

module.exports = mongoose.model('Midwife', schema);
