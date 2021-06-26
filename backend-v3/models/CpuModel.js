const mongoose = require("mongoose");
const CPUModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cores: {
    type: Number,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("CPUModel", CPUModel);
