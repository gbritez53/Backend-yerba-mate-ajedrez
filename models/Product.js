const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    categoryPath: {
      type: String,
      trim: true
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'categories'
    },
    size: {
      type: String,
      trim: true
    },
    path: {
      type: String,
      trim: true
    },
    imgURL: {
      type: String,
      trim: true
    },
    contentImg: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    content: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Products', ProductSchema);
