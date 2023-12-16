const { response } = require("express");
const { PromiseProvider } = require("mongoose");
const List = require("../models/List");
class APIList {
  async getList(req, res) {
    try {
      const getList = await List.find();
      console.log(getList);
      res.status(200).json(getList);
    } catch (error) {
      console.log(error);
    }
  }
  async getListID(req, res) {
    try {
      const ListId = req.params.id;
      const news = await List.findById(ListId);
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFruitID(req, res) {
    try {
      const { diseaseId, ten } = req.params;
      console.log(diseaseId);
      console.log(ten);
      const news = await List.findOne({
        _id: diseaseId,
        // "listqua.id": listItemId,
      });

      const listItem = news.listqua.find((item) => item.ten === ten);
      console.log(listItem);
      res.status(200).json(listItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getThuocID(req, res) {
    try {
      const { diseaseId, ten, ten_thuoc } = req.params;
      // First, find the disease based on diseaseId
      const disease = await List.findOne({ _id: diseaseId });
      // Next, find the specific fruit (ten) within the disease
      const fruit = disease.listqua.find((item) => item.ten === ten);

      // Finally, find the medicine (ten_thuoc) within the fruit's Thuoc array
      const thuoc = fruit.thuoc.find((thuoc) => thuoc.ten === ten_thuoc);
      console.log(thuoc);
      res.status(200).json(thuoc);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new APIList();
