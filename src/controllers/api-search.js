const List = require("../models/List");

class APIsearch {
  //đọc tất cả các product
  async search(req, res) {
    try {
      const searchkey = req.query.searchkey;
      console.log(searchkey);
      const result = await List.find({
        name: { $regex: searchkey, $options: "i" },
      });
      console.log(result);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new APIsearch();
