const mobileService = require("../services/mobileService");
module.exports = {
  getMobiles: async (req, res) => {
    try {
      let mobs = await mobileService.getMobiles();
      // console.log(mobs);
      return helper.apiResponse(
        res,
        mobs,
        "Mobiles fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getMobileByID: async (req, res) => {
    try {
      let getData = await mobileService.getMobileByID(req.params.id);
      return helper.apiResponse(
        res,
        getData,
        "Mobile fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createMobile: async (req, res) => {
    // console.log(req.user);
    try {
      // console.log(`THIS IS BACKEND CREATE MOBILE` + req.body);
      let getData = await mobileService.createMobile(req.body);
      return helper.apiResponse(
        res,
        getData,
        "Mobile created Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
    // createMobile: async (req, res) => {
    //   try {
    //     let getData = await mobileService.createMobile(req.query.id);
    //     return helper.apiResponse(
    //       res,
    //       getData,
    //       "Mobile created Successfully",
    //       false,
    //       "OK"
    //     );
    //   } catch (e) {
    //     return helper.apiResponse(res, null, e.message, true, e.status);
    //   }
  },
  createOS: async (req, res) => {
    try {
      let getData = await mobileService.createOS(req.query.id);
      return helper.apiResponse(
        res,
        getData,
        "Mobile fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getMobileByBrandId: async (req, res) => {
    try {
      let mobiles = await mobileService.getMobileByBrandID(req.params.id);
      return helper.apiResponse(res, mobiles, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getMobileByFilter: async (req, res) => {
    try {
      let mobiles = await mobileService.filterMobile(req.body);
      return helper.apiResponse(res, mobiles, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
