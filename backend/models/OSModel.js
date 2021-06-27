const mongoose = require("mongoose");
const OSModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("OSModel", OSModel);
