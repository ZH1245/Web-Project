// const IPService = require("../services/IPService");

// module.exports = {
//   getIPs: async (req, res) => {
//     try {
//       let ips = await IPService.getIPs();
//       return helper.apiResponse(res, ips, "FETCHED", false, "OK");
//     } catch (e) {
//       return helper.apiResponse(res, null, e.message, true, e.status);
//     }
//   },
//   getIPById: async (req, res) => {
//     try {
//       let ips = await IPService.getIPById(req.params.id);
//       return helper.apiResponse(res, ips, "FETCHED BY ID", false, "OK");
//     } catch (e) {
//       return helper.apiResponse(res, null, e.message, true, e.status);
//     }
//   },
//   createIP: async (req, res) => {
//     try {
//       let ips = await IPService.createIP(req.body);
//       return helper.apiResponse(res, ips, "CREATED", false, "OK");
//     } catch (e) {
//       return helper.apiResponse(res, null, e.message, true, e.status);
//     }
//   },
// };
