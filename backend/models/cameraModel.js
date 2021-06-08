const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  mp: Number,
  sensor: String,
  senorManufacturer: String,
  focal: String,
  features: String,
});

module.exports = mongoose.Model(Schema, "CameraModel");
