const OSModel = require("../models/OSModel");

module.exports = {
  getOS: async () => {
    let OS = await OSModel.find({});
    if (!OS) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return OS;
    }
  },
  getOSById: async (data) => {
    let OS = await OSModel.findById(data);
    if (!OS) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return OS;
    }
  },
  createOS: async (data) => {
    let OS = await OSModel.findOne({ name: data.name, version: data.version });
    if (!OS) {
      let newOS = new OSModel({ ...data });
      await newOS.save();
      return newOS;
    } else {
      let e = new Error();
      e.message = "ALREADY_EXITS";
      e.status = "FORBIDDEN";
      throw e;
    }
  },
};
