var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  certifiedMidwife: Boolean,
  certifiedNurseMidwife: Boolean,
  certifiedProfessionalMidwife: Boolean,
  registeredNurse: Boolean,
  doula: Boolean,
  nonaccredited: Boolean,
  experience: String
});

module.exports = mongoose.model('Certification', schema);