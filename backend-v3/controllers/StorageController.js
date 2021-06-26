const StorageService = require("../services/StorageService");

module.exports = {
  getStorages: async (req, res) => {
    try {
      let storages = await StorageService.getStorages();
      return helper.apiResponse(res, storages, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createStorage: async (req, res) => {
    try {
      let storages = await StorageService.createStorage(req.body);
      return helper.apiResponse(res, storages, "STORAGE CREATED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getStoragebyId: async (req, res) => {
    try {
      //   console.log(req.params);
      let storage = await StorageService.getStorageById(req.params.id);
      return helper.apiResponse(res, storage, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
