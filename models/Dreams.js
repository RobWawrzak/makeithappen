const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const dreamSchema = Schema({
  name: {
    type: String,
    required: true
  },
  estimatedAmount: {
    type: Number,
    required: true
  },
  targetDate: {
    type: Date,
    required: false
  },
  minMonthlySavings: {
    type: Number,
    required: false
  }
});

const Dreams = mongoose.model('Dreams', dreamSchema);
module.exports = Dreams;
