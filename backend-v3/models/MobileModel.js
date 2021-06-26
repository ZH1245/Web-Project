const mongoose = require("mongoose");
const MobileModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  OS: {
    type: String,
    required: true,
  },
  cpu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CPUModel",
  },
  screenSize: {
    type: Number,
    required: true,
  },
  display: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ScreenModel",
  },
  sensor: {
    // type: Array(String),
    type: Array(mongoose.Schema.Types.ObjectId),
    ref: "SensorModel",
  },
  storage: {
    type: Number,
    required: true,
  },
  RAM: { type: Number, required: true },
  status: { type: String },
  radio: {
    type: Boolean,
  },
  NFC: {
    type: Boolean,
  },

  backCamera: {
    type: Object,
  },
  frontCamera: {
    type: Object,
  },
  relDate: {
    type: Date,
  },
  price: { type: Number },
  hits: { type: Number },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "BrandsModel" },
  carriers_4g: { type: Boolean },
  carriers_5g: { type: Boolean },
  card_slot: { type: Boolean, required: true },
  bluetooth: { type: Boolean },
  wlan: { type: Boolean },
  battery: { type: Number, required: true },
  weight: { type: Number },
  color: { type: String },
  IP_Rating: { type: Array(String) },
  sim_slot: { type: String },
  posterimage: { type: String },
  mobileImage: { type: String },
});
MobileModel.index({ name: "text" });
module.exports = mongoose.model("MobileModel", MobileModel);
