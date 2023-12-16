const Image = require("../models/Image");
const express = require("express");
const multer = require("multer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname); // Set a unique filename
  },
});

const upload = multer({ storage: storage });

// Middleware để xử lý việc lưu trữ hình ảnh
const uploadImage = async (req, res, next) => {
  try {
    const imagePath = req.file.path;
    const fileName = req.file.filename;
    const description = req.body.description;
    const newImage = new Image({
      imagePath,
      fileName,
      description,
    });
    await newImage.save();
    console.log(newImage);
    res.status(200).json({ success: true, image: newImage });
  } catch (error) {
    res.status(500).json({ error: "Không thể lưu trữ hình ảnh." });
  }
};
module.exports = {
  uploadImage,
};
