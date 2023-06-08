const Category = require("../models/category");
const Product = require("../models/product");
class APICategory{

    //đọc tất cả các product
    async showcategory(req,res){
        try{
            const category = await Category.find();
            res.status(200).json(category);
            console.log(category)
        }catch(err){
            res.status(404).json({message: err.message});
        }
    }
    async detailcategory(req,res){
        const category = req.params.category;
        console.log(category)
        try {
            const product = await Product.find({ category: category });
            res.status(200).json(product);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    async createcategory(req,res){
        const category =  req.body;

        try {
            const data =  await Category.create(category);
            await data.save();
            res.status(200).json({message:"Thêm danh mục thành công"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }


    }
    //sửa thông tin sản phẩm
    async updatecategory(req,res){
        const id = req.params.id;
        const newCategory = req.body
        try {
            const data = await Category.findByIdAndUpdate(id,newCategory)
            res.status(200).json({message:"Sửa thông tin danh mục thành công"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
    //xóa sản phẩm
    async deletecategory(req, res){
        const id = req.params.id;
        console.log(id)
        try {
            const data = await Category.findByIdAndDelete(id);
            res.status(200).json({message:"Xóa sản phẩm thành công danh mục thành công"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

}
module.exports =  new APICategory;