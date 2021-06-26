const router = require("express").Router();

const OSController = require("../controllers/OSController");
router.route("/get").get(OSController.getOS);
router.route("/get/:id").get(OSController.getOSById);
router.route("/create").post(OSController.createOS);

module.exports = {
  router,
  basePath: "OS",
};
