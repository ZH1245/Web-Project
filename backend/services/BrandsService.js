const BrandsModel = require("../models/BrandsModel");

module.exports = {
  getBrands: async () => {
    let brands = await BrandsModel.find({});
    if (!brands) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else return brands;
  },
  getBrandsByName: async (data) => {
    let brand = await BrandsModel.findOne({ name: data.name });
    if (!brand) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else return brand;
  },
  getBrandById: async (data) => {
    let brand = await BrandsModel.findById(data);
    if (!brand) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else return brand;
  },
  createBrand: async (data) => {
    let brand = await BrandsModel.findOne({ name: data.name });
    if (!brand) {
      let newBrand = new BrandsModel({
        ...data,
      });
      await newBrand.save();
      return newBrand;
    } else {
      let e = new Error();
      e.message = "ALREADY_EXIST";
      e.status = "FORBIDDEN";
      throw e;
    }
  },
};
