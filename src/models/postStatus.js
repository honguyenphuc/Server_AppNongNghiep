const mongoose = require("mongoose");
const statusSchema = mongoose.Schema({
  img_status: { type: String, unique: true, require: true },
  status: { type: String, unique: true, require: true },
});
module.exports = mongoose.model("postStatus", statusSchema);
