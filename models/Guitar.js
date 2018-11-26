const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuitarSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Guitar', GuitarSchema);
