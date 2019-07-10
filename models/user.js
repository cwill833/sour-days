const mongoose = require('mongoose')
// const Portfolio = require('./portfolio')
const Schema = mongoose.Schema


var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
},
{
  timestamps: true
});
  

module.exports = mongoose.model('User', userSchema);