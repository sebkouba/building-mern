var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
  title: String,
  description: String,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);
