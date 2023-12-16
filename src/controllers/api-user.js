const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { PromiseProvider } = require("mongoose");
const jwt = require("jsonwebtoken");
class APIUser {
  async register(req, res) {
    try {
      const { email, password, name } = req.body;
      if (!email || !password || !name) {
        return res
          .status(400)
          .json({ message: "Vui lòng nhập thông tin đầy đủ" });
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Tài khoản đã được sử dụng" });
      }

      const newUser = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      await newUser.save();
      console.log(newUser);
      res.status(201).json(newUser);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) {
        return res.status(400).json({
          message: "Tài khoản không tồn tại",
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          message: "Mật khẩu không đúng",
        });
      }
      let token = jwt.sign(
        { UserId: user._id, role: user.role, email: user.email },
        "secret-key",
        { expiresIn: "30s" }
      );

      res.status(200).json({
        message: "Đăng nhập thành công",
        token,
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({ message: "Lỗi server." });
    }
  }

  async allUser(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: "Lỗi server" });
    }
  }

  async detleteUser(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "Người dùng không tồn tại" });
      }

      await User.findByIdAndRemove(userId);
      res.status(200).json({ message: "Xóa người dùng thành công" });
    } catch (err) {
      res.status(500).json({ message: "Lỗi server" });
    }
  }

  async authenticateToken(req, res, next) {
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Authentication token required." });
    }

    jwt.verify(token.split(" ")[1], "secret-key", (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ error: "Invalid token." });
      }
      req.UserId = decodedToken.UserId;
      req.Role = decodedToken.role;
      next();
    });
  }

  async authorizeAdmin(req, res, next) {
    if (req.Role === "admin") {
      next(); // Cho phép truy cập cho người dùng có vai trò admin
    } else {
      return res.status(403).json({ message: "Không có quyền truy cập." });
    }
  }
}
module.exports = new APIUser();
