const mongoose = require('mongoose');

const SlotSchema = mongoose.Schema({
  slot_time: {
    type: String,
    required: true
  },
  slot_date: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  }
});

module.exports = Slot = mongoose.model('slot', SlotSchema);
