const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transfers = new Schema({
  userId:{type: String, required: true},
  account:{type: String, required: true, MaxLength:30},
  amount:{type: Number, required: true, MaxLength:30},
},{
  timestamps:true,
});

module.exports = mongoose.model('transfer', transfers);