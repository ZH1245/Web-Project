const UserService = require("../services/UserService");

module.exports = {
  loginUser: async (req, res) => {
    try {
      let getData = await UserService.loginUser(req.body);
      return helper.apiResponse(
        res,
        getData,
        "Loggedin Successfully",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  signUpUser: async (req, res) => {
    try {
      let signup = await UserService.signUpUser(req.body);
      return helper.apiResponse(res, signup, "SigUp Successfull", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getUser: async (req, res) => {
    try {
      let user = await UserService.getUser(req.body);
      return helper.apiResponse(res, user, "User Found", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
    getUserById: async (req, res) => {
      try {
        let user = await UserService.getUserById(req.body);
        return helper.apiResponse(res, user, "USER FOUND", false, "OK");
      } catch (e) {
        return hepler.apiResponse(res, null, e.message, true, e.status);
      }
    };
  },
};
