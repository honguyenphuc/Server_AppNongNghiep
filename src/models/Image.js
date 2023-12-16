const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
