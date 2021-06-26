const StorageModel = require("../models/StorageModel");

module.exports = {
  getStorages: async () => {
    let storages = await StorageModel.find({});
    if (!storages) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return storages;
  },
  getStorageById: async (data) => {
    let storage = await StorageModel.findById(data);
    if (!storage) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return storage;
  },
  getStorageByType: async (data) => {
    let storages = await StorageModel.find({ type: data.type });
    if (!storages) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return storages;
  },
  getStorageBySize: async (data) => {
    let storages = await StorageModel.find({ size: data.type });
    if (!storages) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
    return storages;
  },
  createStorage: async (data) => {
    let storage = await StorageModel.findOne({
      type: data.type,
      size: data.size,
    });
    if (!storage) {
      let newstorage = new StorageModel({ ...data });
      await newstorage.save();
    } else {
      let e = new Error();
      e.message = "ALREADY_EXIST";
      e.status = "FORBIDDEN";
    }
  },
};
