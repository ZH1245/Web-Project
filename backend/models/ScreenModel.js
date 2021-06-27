const mongoose = require("mongoose");
const ScreenModel = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  // size: {
  //   type: String,
  //   required: true,
  // },
  // quality: {
  //   type: String,
  //   required: true,
  // },
  //   protection: {
  //     type: String,
  //   },
});
module.exports = mongoose.model("ScreenModel", ScreenModel);
