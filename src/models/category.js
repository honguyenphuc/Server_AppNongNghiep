const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {type: String,require: true},
    createAt: {type: Date ,default: Date.now},
    updateAt: {type: Date ,default: Date.now},
    deletedAt:{type: Date},
});
module.exports = mongoose.model("Category",categorySchema);