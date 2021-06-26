const router = require("express").Router();
const CamController = require("../controllers/CameraController");
router.route("/get").get(CamController.getCameras);
router.route("/get/:id").get(CamController.getCameraByID);
router.route("/create").post(CamController.createCamera);

module.exports = {
  router,
  basePath: "camera",
};
