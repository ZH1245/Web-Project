const mongoose = require("mongoose");

const CameraModel = mongoose.Schema({
  MP: {
    type: Number,
    required: true,
  },
  focal: {
    type: Number,
  },
});

module.exports = mongoose.model("CameraModel", CameraModel);
