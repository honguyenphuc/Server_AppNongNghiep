const List = require("../models/List");
class APIProduct {
  async postListBenh(req, res) {
    const { url, name, listqua } = req.body;
    if (!url || !name || !listqua) {
      return res
        .status(400)
        .json({ message: "Vui lòng nhập thông tin đầy đủ" });
    }
    try {
      const newList = new List({
        url: url,
        name: name,
        listqua: listqua, // Dữ liệu từ phía máy khách sẽ truyền vào đây
      });

      await newList.save();
      console.log(newList);
      res
        .status(200)
        .json({ message: "Thêm phương pháp điều trị thành công!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getListBenh(req, res) {
    try {
      const data = await List.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: "Lỗi server" });
    }
  }
  //xóa loại bệnh
  async delete(req, res) {
    const id = req.params.id;
    console.log(id);
    try {
      const data = await List.findByIdAndDelete(id);
      res.status(200).json({ message: "Xóa Loại Bệnh thành công" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
module.exports = new APIProduct();
