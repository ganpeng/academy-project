import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    default: false
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


export default mongoose.model('Carousel', CarouselSchema);



