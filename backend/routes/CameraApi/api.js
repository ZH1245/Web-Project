const express = require("express");
const ExpressApp = express();
const cameraModel = require("../../models/cameraModel");

let camera1 = cameraModel();
camera1.mp = 5;
camera1.sensor = "CMOS";
camera1.sensorManufacturer = "UNKNOWN";
camera1.focal = "1/4";
camera1.features = "AF 720p@30fps";

ExpressApp.get("/", (req, resp) => {
  mobileModel.find({}, (error, result) => {
    if (error) resp.status(404).send("NOT FOUND");
    else {
      resp.send(result);
    }
  });
});
ExpressApp.get("/:id", (req, resp) => {
  mobileModel.findById(req.params.id, (error, result) => {
    if (error) {
      resp.status(404).send("NOT FOUND");
    } else {
      resp.send(result);
    }
  });
});
