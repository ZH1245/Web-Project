const router = require("express").Router();
const CpuContoller = require("../controllers/CpuController");

router.route("/get").get(CpuContoller.getCpu);
router.route("/get/:id").get(CpuContoller.getCpuById);
router.route("/getCores/:cores").get(CpuContoller.getCpuByCores);
router.route("/create").post(CpuContoller.createCpu);
router.route("/update").put(CpuContoller.updateCpu);
module.exports = {
  router,
  basePath: "cpu",
};
