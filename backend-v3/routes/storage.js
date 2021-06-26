const router = require("express").Router();
const StorageController = require("../controllers/StorageController");
router.route("/get").get(StorageController.getStorages);
router.route("/get/:id").get(StorageController.getStoragebyId);
router.route("/create").post(StorageController.createStorage);
module.exports = {
  router,
  basePath: "storage",
};
