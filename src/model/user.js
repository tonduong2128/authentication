const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  userName:{type: String, required: true, MaxLength:30},
  password:{type: String, required: true, MaxLength:30},
},{
  timestamps:true,
});

module.exports = mongoose.model('user', user);