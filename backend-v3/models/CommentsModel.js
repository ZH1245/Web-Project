const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  description: { type: String, required: true },
  likes: { type: Number },
  mobileId: { type: mongoose.Schema.Types.ObjectId },
  time: { type: Date, required: true },
});

module.exports = mongoose.model("CommentsModel", Schema);
