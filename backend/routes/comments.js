const CommentController = require("../controllers/CommentsController");
const router = require("express").Router();
const authRule = require("../middlewares/auth");

router.route("/get").get(CommentController.getComments);
router.route("/create").post(authRule, CommentController.createComment);
router.route("/delete/:id").delete(authRule, CommentController.deleteComment);
router.route("/getbyMobile/:id").get(CommentController.getCommentsByMobileId);
router.route("/getbyUser/:id").get(CommentController.getCommentsByUserId);

module.exports = {
  router,
  basePath: "comments",
};
