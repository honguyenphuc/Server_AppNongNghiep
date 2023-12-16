const { response } = require("express");
const { PromiseProvider } = require("mongoose");
const Medicines = require("../models/Medicines");
class APIList {
  async getListMedisines(req, res) {
    try {
      const getList = await Medicines.find();
      console.log(getList);
      res.status(200).json(getList);
    } catch (error) {
      console.log(error);
    }
  }
  async getListMedisinesName(req, res) {
    try {
      const typeName = req.params.typeName;
      const medicines = await Medicines.find({ ten_loai_thuoc: typeName });
      res.status(200).json(medicines);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new APIList();
