const mongoose = require("mongoose");
module.exports.bootstrap = async () => {
  let connectionString = process.env.MONGO_DB_DEV_URL;
  if (!connectionString && process.env.PRODUCTION) {
    connectionString = `mongodb+srv://ZH1245:zaq_0905@restful.izh2p.mongodb.net/mobileStore`;
  } else {
    connectionString = "mongodb://localhost:27017";
  }
  try {
    if (process.env.PRODUCTION) {
      return await mongoose
        .connect(connectionString, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("DB Connected on" + connectionString);
        });
    } else {
      return await mongoose
        .connect(connectionString, {
          dbName: "mobileStore",
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("DB Connected on" + connectionString);
        });
    }
  } catch (e) {
    throw new Error("DB Connection Error on " + connectionString);
  }
};
