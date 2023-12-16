const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  username: { type: String, required: true }, // Trường username để lưu email làm tên đại diện
  // Các trường thông tin khác của comment
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
