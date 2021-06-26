const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("StorageModel", Schema);
