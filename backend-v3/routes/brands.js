const router = require("express").Router();
const BrandsController = require("../controllers/BrandController");

router.route("/get").get(BrandsController.getBrands);
router.route("/get/:id").get(BrandsController.getBrandsById);
router.route("/create").post(BrandsController.createBrand);
module.exports = {
  router,
  basePath: "brands",
};
