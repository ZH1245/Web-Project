const SensorService = require("../services/SensorService");
module.exports = {
  createSensor: async (req, res) => {
    try {
      // console.log(req.body);
      let data = await SensorService.createSensor(req.body);
      return helper.apiResponse(res, data, "Created", false, "OK");
    } catch (e) {
      //   console.log("IN CATCH");
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getSensors: async (req, res) => {
    try {
      let data = await SensorService.getSensors();
      return helper.apiResponse(res, data, "Fetched", false, "OK");
    } catch (error) {
      return helper.apiResponse(res, null, e.message, true, error.status);
    }
  },
  getSensorByID: async (req, res) => {
    try {
      let data = await SensorService.getSensorsbyID(req.params.id);
      return helper.apiResponse(res, data, "Fetched", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, error.status);
    }
  },
  getSensorByName: async (req, res) => {
    try {
      let data = await SensorService.getSensorsbyName(req.body);
      return helper.apiResponse(res, data, "Fetched", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, error.status);
    }
  },
  updateSensor: async (req, res) => {
    try {
      let data = await SensorService.updateSensor(req.body);
      return helper.apiResponse(res, data, "Updated", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, error.status);
    }
  },
};
