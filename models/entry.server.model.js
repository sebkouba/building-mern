//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

import { Schema } from 'mongoose';
import mongoose from 'mongoose';

var entrySchema = new Schema({
  title: String,
  description: String,
  createdOn: {type: Date, default: Date.now}
});

//module.exports = model('Entry', entrySchema);
export default mongoose.model('Entry', entrySchema);
