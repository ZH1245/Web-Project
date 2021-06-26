const mongoose = require("mongoose");
const SensorModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("SensorModel", SensorModel);
