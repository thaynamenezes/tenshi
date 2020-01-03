const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  slots: {
    type: ObjectId,
    ref: 'slot'
  },
  created_at: {
    type: Date
  }
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);
