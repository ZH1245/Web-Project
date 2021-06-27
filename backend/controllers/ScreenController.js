const ScreenService = require("../services/ScreenService");
module.exports = {
  getScreens: async (req, res) => {
    try {
      let screens = await ScreenService.getScreens();
      return helper.apiResponse(res, screens, "Fetched Screens", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getScreensByID: async (req, res) => {
    try {
      let screen = await ScreenService.getScreensbyId(req.params.id);
      return helper.apiResponse(res, screen, "ScreenByID", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getScreensbyType: async (req, res) => {
    try {
      let screens = await ScreenService.getScreensbyType(req.body.type);
      return helper.apiResponse(res, screens, "ScreensType", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createScreen: async (req, res) => {
    try {
      let screen = await ScreenService.createScreen(req.body);
      return helper.apiResponse(res, screen, "SCREEN CREATED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
