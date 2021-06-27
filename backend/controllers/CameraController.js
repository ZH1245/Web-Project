const CameraService = require("../services/CameraService");

module.exports = {
  getCameras: async (req, res) => {
    try {
      let mobs = await CameraService.getCamera();
      return helper.apiResponse(
        res,
        mobs,
        "Cameras fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCameraByID: async (req, res) => {
    try {
      let mobs = await CameraService.getCameraByID(req.params.id);
      return helper.apiResponse(
        res,
        mobs,
        "Camera fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCameraByMP: async (req, res) => {
    try {
      let mobs = await CameraService.getCameraByMP(mp);
      return helper.apiResponse(
        res,
        mobs,
        "Camera fetched Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createCamera: async (req, res) => {
    try {
      let camera = await CameraService.createCamera(req.body);
      return helper.apiResponse(
        res,
        camera,
        "Camera Created Successfully",
        false,
        "OK"
      );
      return;
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
