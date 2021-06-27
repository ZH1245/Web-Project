const router = require("express").Router();
const ScreenController = require("../controllers/ScreenController");

router.route("/get").get(ScreenController.getScreens);
router.route("/get/:id").get(ScreenController.getScreensByID);
router.route("/get/type").post(ScreenController.getScreensbyType);
router.route("/create").post(ScreenController.createScreen);
module.exports = {
  router,
  basePath: "screen",
};
