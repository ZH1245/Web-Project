// const IPModel = require("../models/IPRatingModel");

// module.exports = {
//   getIPs: async () => {
//     let ips = IPModel.find({});
//     if (!ips) {
//       let e = new Error();
//       e.message = "NOT_FOUND";
//       e.status = "FORBIDDEN";
//       throw e;
//     } else {
//       return ips;
//     }
//   },
//   getIPById: async (data) => {
//     let ip = await IPModel.findById(data);
//     if (!ip) {
//       let e = new Error();
//       e.message = "NOT_FOUND";
//       e.status = "FORBIDDEN";
//       throw e;
//     } else {
//       return ip;
//     }
//   },
//   createIP: async (data) => {
//     let existIP = await IPModel.findOne({ name: data.name });
//     if (!existIP) {
//       let newIp = new IPModel({ ...data });
//       await newIp.save();
//     } else {
//       let e = new Error();
//       e.message = "ALREADY_EXIST";
//       e.status = "FORBIDDEN";
//       throw e;
//     }
//   },
// };
