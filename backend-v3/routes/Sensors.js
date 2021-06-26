const router = require("express").Router();

const SensorController = require("../controllers/SensorController");

router.route("/create/").post(SensorController.createSensor);
router.route("/get").get(SensorController.getSensors);
router.route("/get/:id").get(SensorController.getSensorByID);

module.exports = {
  router,
  basePath: "sensors",
};
