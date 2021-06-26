const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const lodash = require("lodash");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let e = new Error();
module.exports = {
  loginUser: async (response) => {
    let user = await UserModel.findOne({ email: response.email });
    if (!user) {
      e.message = "User with this Email doesn't exist";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      let pass = await bcrypt.compare(response.password, user.password);
      if (!pass) {
        e.message = "Invalid Password";
        e.status = "FORBIDDEN";
        throw e;
      } else {
        // return user;
        let token = await jwt.sign(
          {
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            role: user.role,
          },
          process.env.PRIVATE_KEY
          // {expiresIn:}
        );
        // return lodash.pick(user, ["email", "_id"]);
        return token;
      }
    }
  },
  signUpUser: async (response) => {
    let { password, ...rest } = response;
    // console.log(response);
    let hash = await bcrypt.hash(password, 15);
    console.log(hash);
    let newuser = new UserModel({
      ...rest,
      password: hash,
      // type='local',
    });
    let u = await newuser.save();
    // return u;
    return lodash.pick(u, ["_id", "email"]);
  },
  getUsers: async () => {
    let users = UserModel.find({});
    if (!users) {
      let e = new Error();
      e.status = "NOT_FOUND";
    }
    // return users;
    return lodash.pick(users, ["email", "_id"]);
  },
  getUser: async (body) => {
    let users = UserModel.findOne({ email: body.email });
    if (!users) {
      let e = new Error();
      e.status = "NOT_FOUND";
    }
    // return users;
    return lodash.pick(users, ["email", "_id"]);
  },
  getUserById: async (body) => {
    let user = UserModel.findById(body.id);
    if (!user) {
      let e = new Error();
      e.status = "NOT_FOUND";
      e.message = "FORBIDDEN";
      throw e;
    } else {
      return lodash.pick(user, ["email", "_id"]);
    }
    // return user;
  },
};
