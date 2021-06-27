const CommentModel = require("../models/CommentsModel");
module.exports = {
  getComments: async () => {
    let data = await CommentModel.find({}).populate("userId");
    if (!data) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.message = "FORBIDDEN";
      throw e;
    } else {
      return data;
    }
  },
  getCommentsbyMobileID: async (body) => {
    let comments = await CommentModel.find({ mobileId: body }).populate(
      "userId"
    );
    if (!comments) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return comments;
    }
  },
  getCommentsbyUserID: async (body) => {
    let comments = await CommentModel.findOne({ userId: body }).populate(
      "userId"
    );
    if (!comments) {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    } else {
      return comments;
    }
  },
  createComment: async (data) => {
    let newcomment = new CommentModel({ ...data });
    await newcomment.save();
  },
  deleteComment: async (data) => {
    console.log(data);
    let comment = await CommentModel.findById(data);
    if (
      comment
      // &&
      // comment.mobileId == data.mobileId &&
      // comment.userID == data.userId
    ) {
      let deletedcomment = await CommentModel.findByIdAndDelete(data);
      return deletedcomment;
    } else {
      let e = new Error();
      e.message = "NOT_FOUND";
      e.status = "FORBIDDEN";
      throw e;
    }
  },
};
