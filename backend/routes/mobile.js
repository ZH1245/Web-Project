const router = require("express").Router();
const mobileController = require("../controllers/mobileController");
const admin = require("../middlewares/adminAuth");
const loggedin = require("../middlewares/auth");

router.route("/get").get(mobileController.getMobiles);
router.route("/get/:id").get(mobileController.getMobileByID);
router.route("/getbrand/:id").get(mobileController.getMobileByBrandId);
router.route("/filter").post(mobileController.getMobileByFilter);
// router.route("/getpop/").get(mobileController.getMobileByPopularity);

// router.route("/createOS").post(mobileController.createOS);
router.route("/create").post(loggedin, admin, mobileController.createMobile);

module.exports = {
  router,
  basePath: "mobile",
};
