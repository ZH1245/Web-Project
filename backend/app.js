var createError = require("http-errors");
var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mobileMongoose = require("mongoose");
const cameraMongoose = require("mongoose");
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var mobileRouter = require("./routes/MobilesApi/api");

var app = express();
mobileMongoose
  .connect(
    "mongodb+srv://ZH1245:zaq_0905@restful.izh2p.mongodb.net/mobiles",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("CONNECTED TO MONGO");
  })
  .catch((error) => {
    console.log(error);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// app.use(json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/api", mobileRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
