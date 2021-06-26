const BrandService = require("../services/BrandsService");
module.exports = {
  getBrands: async (req, res) => {
    // console.log(req.headers);
    try {
      let brands = await BrandService.getBrands();
      return helper.apiResponse(res, brands, "FETCHED BRANDS", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getBrandsByName: async (req, res) => {
    try {
      let brands = await BrandService.getBrandsByName(req.params.name);
      return helper.apiResponse(res, brands, "FETCHED BRANDS", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createBrand: async (req, res) => {
    try {
      let brands = await BrandService.createBrand(req.body);
      return helper.apiResponse(
        res,
        brands,
        `Brand Created ${req.body.name}`,
        false,
        "OK"
      );
    } catch (e) {
      let statusCode = e.status || "INTERNAL_SERVER_ERROR";
      return helper.apiResponse(res, null, e.message, true, statusCode);
    }
  },
  getBrandsById: async (req, res) => {
    try {
      let brands = await BrandService.getBrandById(req.params.id);
      return helper.apiResponse(res, brands, "FETCHED BRANDS", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
