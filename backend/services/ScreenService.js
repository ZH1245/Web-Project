const ScreenModel = require("../models/ScreenModel");
module.exports = {
  getScreens: async () => {
    let screens = await ScreenModel.find({});
    if (!screens) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return screens;
  },
  getScreensbyId: async (data) => {
    let screens = await ScreenModel.findById(data);
    if (!screens) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return screens;
  },
  getScreensbyType: async (data) => {
    let screens = await ScreenModel.find({ type: data.type });
    if (!screens) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return screens;
  },
  createScreen: async (res) => {
    let exist = await ScreenModel.findOne({ res });
    if (!exist) {
      let newScreen = new ScreenModel({
        ...res,
      });
      await newScreen.save();
    } else {
      let e = new Error();
      e.message = "ALREADY_EXIST";
      e.status = "FORBIDDEN";
      throw e;
    }
  },
};
