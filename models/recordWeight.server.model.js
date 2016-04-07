import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bodyWeightSchema = new Schema({
  weight: Number,
  createdOn: {type: Date, default: Date.now}
});

export default mongoose.model('Bodyweight', bodyWeightSchema);
