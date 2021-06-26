const CpuService = require("../services/CpuService");

module.exports = {
  getCpu: async (req, res) => {
    try {
      let cpu = await CpuService.getCPU();
      return helper.apiResponse(res, cpu, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createCpu: async (req, res) => {
    try {
      let cpu = await CpuService.createCPU(req.body);
      return helper.apiResponse(res, cpu, "Created", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCpuById: async (req, res) => {
    try {
      let cpu = await CpuService.getCPUByID(req.params.id);
      return helper.apiResponse(res, cpu, "Created", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCpuByCores: async (req, res) => {
    try {
      let cpu = await CpuService.getCPUByCores(req.params.cores);
      return helper.apiResponse(res, cpu, "Created", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  updateCpu: async (req, res) => {
    try {
      let cpu = await CpuService.updateCpu(req.body);
      return helper.apiResponse(res, cpu, "Updated", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
