const CpuModel = require("../models/CpuModel");
const { findById } = require("../models/UserModel");

const CPUController = {
  getCPU: async () => {
    let cpus = await CpuModel.find({});
    if (!cpus) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return cpus;
  },
  getCPUByID: async (id) => {
    let cpu = await CpuModel.findById(id);
    if (!cpu) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return cpu;
  },
  getCPUByCores: async (data) => {
    let cpus = await CpuModel.find({ cores: data });
    if (!cpus) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return cpus;
  },
  getCPUByManufacturer: async (data) => {
    let cpus = await CpuModel.find({ Manufacturer: data.man });
    if (!cpus) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return cpus;
  },
  createCPU: async (response) => {
    let Cpu = await CpuModel.findOne({
      name: response.name,
      cores: response.cores,
      manufacturer: response.manufacturer,
    });
    if (!Cpu) {
      let newCpu = CpuModel({ ...response });
      await newCpu.save();
    } else {
      throw (e = new Error().message("ALREADY_EXIST").status("FORBIDDEN"));
    }
  },
  updateCpu: async (response) => {
    let query = {
      $set: {
        ...response,
      },
    };
    await CpuModel.findByIdAndUpdate(response._id, query);
    let cpu = await CpuModel.findById(response.id);
    return cpu;
  },
};

module.exports = CPUController;
