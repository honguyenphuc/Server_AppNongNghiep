const multer = require("multer");
const path = require("path");

const uploadDirectory = path.join(__dirname, "../../public");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDirectory);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
