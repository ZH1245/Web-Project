const CameraModel = require("../models/CameraModel");
const CpuModel = require("../models/CpuModel");
const MobileModel = require("../models/MobileModel");
const OSModel = require("../models/OSModel");

const mobileService = {
  filterMobile: async (response) => {
    // let price = response.price;
    // let camera = response.backCamera;
    // let cores = response.cores;
    let result = await MobileModel.find({ $text: { $search: response.name } });
    return result;

    // let cpu = await CpuModel.find({
    //   cores: { $gte: cores.min, $lte: cores.max },
    // });
    // let cpuIds = [];
    // if (cpu.length > 0) {
    //   cpuIds = cpu.map((i) => i.id);
    // }

    // let mobile = await MobileModel.find({
    //   $and: [
    //     { price: { $gte: price.min, $lte: price.max } },
    //     { "backCamera.MP": { $gte: camera.min, $lte: camera.max } },
    //     { cpu: { $in: cpuIds } },
    //   ],
    // });
    // return mobile;
  },
  getMobiles: async (query) => {
    const mobiles = await MobileModel.find({}).populate(
      "cpu brand sensor display"
    );
    // .populate("SensorModels")
    // .populate("ScreenModels")
    // .populate("BrandsModels")
    // .populate("CPUModels");

    if (!mobiles) {
      let e = new Error();
      e.status = "NOT_FOUND";
    }
    return mobiles;

    // console.log(req.user);
    // const page = Number(query.page ? query.page : 1);
    // const perPage = Number(query.perPage ? query.perPage : 30);
    // const skipRecords = perPage * (page - 1);
    // const mobiles = await MobileModel.find()
    //   .skip(skipRecords)
    //   .limit(perPage)
    //   .populate("cpu brand sensor display");
    // if (!mobiles) {
    //   let e = new Error();
    //   e.status = "NOT_FOUND";
    // }
    // let total = await MobileModel.countDocuments();
    // return { mobiles, total };
  },
  getMobileByID: async (data) => {
    let mobile = await MobileModel.findById(data).populate(
      "cpu brand sensor display"
    );
    if (!mobile) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      await MobileModel.findByIdAndUpdate(
        data,
        {
          $set: { hits: mobile.hits + 1 },
        },
        (err, doc) => {
          // console.log(doc);
        }
      );
      return mobile;
    }
  },
  createMobile: async (response) => {
    let exist = await MobileModel.findOne({ ...response }).populate(
      "cpu brand sensor display"
    );
    if (!exist) {
      let mobile = new MobileModel({
        ...response,
      });
      await mobile.save();
    } else {
      let e = new Error();
      e.message = "ALREADY_EXIST";
      e.sttatus = "FORBIDDEN";
      throw e;
    }
  },
  createOS: async () => {
    let OS = new OSModel({
      name: "Android",
      version: 11,
    });
    try {
      await OS.save();
    } catch (e) {
      throw e;
    }
  },
  getMobileByBrandID: async (data) => {
    let mobiles = await MobileModel.find({ brand: data }).populate(
      "cpu brand sensor display"
    );
    if (!mobiles) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else return mobiles;
    // const page = Number(req.query.page ? req.query.page : 1);
    // const perPage = Number(req.query.perPage ? req.query.perPage : 30);
    // const skipRecords = perPage * (page - 1);
    // const mobiles = await MobileModel.find({ brand: data })
    //   .skip(skipRecords)
    //   .limit(perPage)
    //   .populate("cpu brand sensor display");
    // if (!mobiles) {
    //   let e = new Error();
    //   e.status = "NOT_FOUND";
    // }
    // let total = await MobileModel.countDocuments();
    // return { mobiles, total };
  },
};
module.exports = mobileService;
