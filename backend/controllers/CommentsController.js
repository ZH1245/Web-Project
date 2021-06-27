const CommentService = require("../services/CommentService");

module.exports = {
  getComments: async (req, res) => {
    try {
      let comments = await CommentService.getComments();
      return helper.apiResponse(res, comments, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCommentsByMobileId: async (req, res) => {
    try {
      let comments = await CommentService.getCommentsbyMobileID(req.params.id);

      return helper.apiResponse(res, comments, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  getCommentsByUserId: async (req, res) => {
    try {
      let comments = await CommentService.getCommentsbyUserID(req.params.id);
      return helper.apiResponse(res, comments, "FETCHED", false, "OK");
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  createComment: async (req, res) => {
    // console.log(req.user);
    try {
      let newcomment = await CommentService.createComment(req.body);
      return helper.apiResponse(
        res,
        newcomment,
        "NEW COMMENT ADDED",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
  deleteComment: async (req, res) => {
    try {
      let deletecomment = await CommentService.deleteComment(req.params.id);
      return helper.apiResponse(
        res,
        deletecomment,
        "Comment DELETED",
        false,
        "OK"
      );
    } catch (e) {
      return helper.apiResponse(res, null, e.message, true, e.status);
    }
  },
};
