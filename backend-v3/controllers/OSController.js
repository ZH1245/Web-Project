const OSService = require("../services/OSService");

module.exports = {
  getOS: async (req, res) => {
    try {
      let OS = await OSService.getOS();
      return helper.apiResponse(res, OS, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createOS: async (req, res) => {
    try {
      let OS = await OSService.createOS(req.body);
      return helper.apiResponse(
        res,
        OS,
        `OS CREATED ${req.body.name + req.body.version}`,
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getOSById: async (req, res) => {
    try {
      let OS = await OSService.getOSById(req.params.id);
      return helper.apiResponse(res, OS, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
