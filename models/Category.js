const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    path: {
      type: String,
      trim: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'products'
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Categories', CategorySchema);
