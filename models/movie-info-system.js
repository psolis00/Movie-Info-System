//models/movie-info-system.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number
});
module.exports = mongoose.model('Movie Info System', expenseSchema);