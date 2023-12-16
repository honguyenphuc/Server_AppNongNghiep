const mongoose = require("mongoose");

// Định nghĩa Schema cho loại thuốc đặc trị
const SpecialMedicineSchema = mongoose.Schema({
  ten_loai_thuoc: { type: String, required: true },
  des: { type: String, required: true },
  img: { type: String, required: true },
  guide: { type: String, required: true },
  note: { type: String, required: true },
  // Các thuộc tính khác có thể được thêm vào tùy thuộc vào nhu cầu của bạn
});

module.exports = mongoose.model("medicines", SpecialMedicineSchema);
