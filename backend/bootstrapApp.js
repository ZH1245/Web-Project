module.exports = (app) => {
  require("./routes/index").bootstrap(app);
  require("./helpers/index").bootstrap(app);
  require("./config/connectDatabase").bootstrap();
};
