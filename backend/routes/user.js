const router = require("express").Router();
const userController = require("../controllers/userController");
const userRules = require("../validations/UserValidation");
const validation = require("../helpers/validation");
const signupAuth = require("../middlewares/signUpauth");
router
  .route("/login")
  .post(userRules.loginUserRules(), validation, userController.loginUser);
router
  .route("/signup")
  .post(userRules.signUpUserRules(), validation, userController.signUpUser);
//   .get()
module.exports = {
  router,
  basePath: "user",
};
