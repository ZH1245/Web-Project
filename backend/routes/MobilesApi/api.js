const express = require("express");
const mobileModel = require("../../models/mobileModel");
const router = express.Router();
// let mobile1 = mobileModel();
// mobile1.name = "Nokia X2";
// mobile1.price = 20000;
// mobile1.year = 2008;
// mobile1.description = "Welcome to new Nokia phone with first Android";
// mobile1.brand = "Nokia";
// mobile1.imageurl =
//   "https://fdn2.gsmarena.com/vv/pics/nokia/Nokia-X2-Dual-SIM-2.jpg";
// mobile1.posterimage =
//   "https://fdn2.gsmarena.com/vv/bigpic/Nokia-X2-Dual-SIM.jpg";
// mobile1.OS = "Android";
// mobile1.frontcamera = "VGA FF";
// mobile1.backcamera = "5MP AF 720p@30fps";
// mobile1.save();

// let mobile1 = mobileModel();
// mobile1.name = "Samsung Galaxy S10";
// mobile1.price = 100000;
// mobile1.year = 2018;
// mobile1.description = "Welcome to new GALAXY S10";
// mobile1.brand = "Samsung";
// mobile1.imageurl =
//   "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg";
// mobile1.posterimage =
//   "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10.jpg";
// mobile1.OS = "Android 9";
// mobile1.frontcamera = "10MP  4K@30fps";
// mobile1.backcamera = "12MP + 12MP + 16MP Triple Camera  4k@30fps";
// mobile1.save();

router.get("/", async (req, resp) => {
  console.log("ELLLO");
  await mobileModel.find({}, (error, result) => {
    if (error) resp.status(404).send("NOT FOUND");
    else {
      resp.send(result);
    }
  });
});
router.get("/:id", async (req, resp) => {
  await mobileModel.findById(req.params.id, (error, result) => {
    if (error) {
      resp.status(404).send("NOT FOUND");
    } else {
      resp.send(result);
    }
  });
});
router.get("/mobiles/:brand", async (req, resp) => {
  await mobileModel.find({ brand: req.params.brand }, (error, result) => {
    if (error) {
      resp.status(404).send("NOT FOUND");
    } else {
      resp.send(result);
    }
  });
});

module.exports = router;
