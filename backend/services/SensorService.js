const SensorModel = require("../models/SensorModel");
const SensorController = {
  getSensors: async () => {
    let sensors = await SensorModel.find({});
    if (!sensors) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return sensors;
  },
  getSensorsbyID: async (data) => {
    let sensors = await SensorModel.findById(data);
    if (!sensors) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return sensors;
  },
  getSensorsbyName: async (data) => {
    let sensors = await SensorModel.find({ name: data.name });
    if (!sensors) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return sensors;
  },
  createSensor: async (response) => {
    // console.log(response);
    let sensor = await SensorModel.findOne({ name: response.name });
    // try {
    if (sensor) {
      let e = new Error();
      e.status = "FORBIDDEN";
      e.message = "ALREADY_EXIST";
      throw e;
    } else {
      let newsensor = new SensorModel({ name: response.name });
      await newsensor.save();
      return newsensor;
    }
    // }
    // catch (e) {
    //   throw e;
    // }
  },
  updateSensor: async (data) => {
    let query = {
      $set: {
        ...data,
      },
    };
    await SensorModel.findByIdAndUpdate(data._id, query);
    let sensor = await SensorModel.findById(data._id);
    return sensor;
  },
};
module.exports = SensorController;
