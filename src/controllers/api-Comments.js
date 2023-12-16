const { response } = require("express");
const { PromiseProvider } = require("mongoose");
const Comments = require("../models/comments");
const User = require("../models/user");
class CommentController {
  async createComment(req, res) {
    try {
      const { userId, comment } = req.body;

      // Tìm thông tin người dùng
      const user = await User.findById(userId);

      if (user) {
        // Tạo comment với thông tin người dùng làm tên đại diện
        const newComment = new Comments({
          userId,
          comment,
          username: user.email, // Sử dụng email của người dùng làm tên đại diện trong comment
        });
        // Lưu comment vào cơ sở dữ liệu
        const savedComment = await newComment.save();
        console.log(savedComment);
        res.json({
          message: "Comment created successfully",
          comment: savedComment,
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new CommentController();
