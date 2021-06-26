const fs = require("fs");
exports.bootstrap = (app) => {
  global["helper"] = [];
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    }

    const broker = file.split(".");

    global["helper"][`${broker[0]}`] = require(`${__dirname}/${file}`);
  });
};
