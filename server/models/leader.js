import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const LeaderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  desc: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model('Leader', LeaderSchema);

