const CameraModel = require("../models/CameraModel");

const CameraController = {
  getCamera: async () => {
    let cams = await CameraModel.find({});
    if (!cams) {
      let e = new Error();
      e.status = "NOT_FOUND";
      throw e;
    }
    return cams;
  },
  getCameraByID: async (data) => {
    let cam = await CameraModel.findById(data);
    if (!cam) {
      let e = new Error();
      e.status = "NOT_FOUND";
      throw e;
    }
    return cam;
  },
  getCameraByMP: async (data) => {
    let cams = await CameraModel.find({ MP: data.mp });
    if (!cams) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return cams;
  },
  createCamera: async (response) => {
    let cam = await CameraModel.findOne({
      MP: response.MP,
      // flash: response.flash,
      focal: response.focal,
    });
    if (!cam) {
      let newcamera = new CameraModel({ ...response });
      await newcamera.save();
    } else {
      throw new Error().message("ALREADY_EXIST").status("FORBIDDEN");
    }
  },
  updateCamera: async (response) => {
    let query = {
      $set: {
        ...response,
      },
    };
    await CameraModel.findByIdAndUpdate(response.id, query);
    let cam = await CameraModel.findById(response.id);
    return cam;
  },
};

module.exports = CameraController;
