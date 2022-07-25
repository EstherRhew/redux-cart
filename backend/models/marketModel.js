const mongoose = require("mongoose");
const {mongo} = require("mongoose");

const marketSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  product_image: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model("Market", marketSchema)