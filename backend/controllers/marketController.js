const Market = require("../models/marketModel");
const mongoose = require("mongoose");

exports.getItemList = async (req, res) => {
  try {
    const list = await Market.find({});
    return res.status(200).json({list});
  } catch (error) {
    return res.status(500).json({code: '500', message: error.message})
  }
}