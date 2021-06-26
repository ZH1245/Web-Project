const mongoose = require("mongoose");

const BrandModel = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("BrandsModel", BrandModel);
