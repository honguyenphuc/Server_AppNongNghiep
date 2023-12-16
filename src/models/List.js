const mongoose = require("mongoose");

const ThuocSchema = mongoose.Schema({
  ten_thuoc: { type: String, require: true },
  url_thuoc: { type: String, require: true },
  describe: { type: String, require: true },
  lieuluong_1: { type: String, require: true },
  lieuluong_2: { type: String, require: true },
  lieuluong_3: { type: String, require: true },
  lieuluong_4: { type: String, require: true },
});

const ListQuaScheama = mongoose.Schema({
  ten: { type: String, require: true },
  img: { type: String, required: true },
  nguyennhan: { type: String, require: true },
  title_main: { type: String, require: true },
  title_1: { type: String, require: true },
  url_1: { type: String, require: true },
  title_2: { type: String, require: true },
  title_3: { type: String, require: true },
  title_4: { type: String, require: true },
  title_5: { type: String, require: true },
  thuoc: [ThuocSchema],
});

const streatmentSchema = mongoose.Schema({
  url: { type: String, require: true },
  name: { type: String, require: true },
  listqua: [ListQuaScheama],
});
const List = mongoose.model("List", streatmentSchema);

module.exports = List;
