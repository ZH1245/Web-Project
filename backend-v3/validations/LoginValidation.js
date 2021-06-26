// const { body, query, check } = require("express-validator");
// const UserModel = require("../models/UserModel");
// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSalt(10);

// module.exports = {
//   loginUserRules: () => {
//     return [
//       check("email")
//         .notEmpty()
//         .isEmail()
//         .withMessage("Invalid Email")
//         .custom((value, { req }) => {
//           console.log("value ", value);
//           let user = UserModel.findOne({ email: value });
//           return user.exec().then((value) => {
//             return value ? {} : Promise.reject("Email not found");
//           });
//         }),
//       check("password")
//         .notEmpty()
//         .isLength({ min: 8, max: 30 })
//         // .custom((value,{req})=>{
//         //     let user = UserModel.findOne({email:value});
//             // await bcrypt.compare()
//         // })
//         .withMessage(
//           "Password should contain at least 8 character and at most 30"
//         ),
//     ];
//   },
//   signUpUserRules:()=>{

//   }
// };
