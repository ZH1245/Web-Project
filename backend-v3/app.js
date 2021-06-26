const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./bootstrapApp")(app);
app.listen(4000, () => {
  console.log("listening on 4000");
});
