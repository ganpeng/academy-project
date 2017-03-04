import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ExpertSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  workplace: {
    type: String,
    required: true
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


export default mongoose.model('Expert', ExpertSchema);

