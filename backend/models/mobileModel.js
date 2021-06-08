const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  price: Number,
  year: Number,
  frontcamera: String,
  backcamera: String,
  description: String,
  imageurl: String,
  posterimage: String,
  brand: String,
  OS: String,
});
const model = mongoose.model("MobilesApi", Schema);
module.exports = model;
