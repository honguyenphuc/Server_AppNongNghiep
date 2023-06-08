const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    hoten:{type: String ,required: true},
    sdt:{type: String ,required: true},
    email:{type: String ,required: true},
    diachi:{type: String ,required: true},
    item: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
        soluong: {type: Number, require: true},
    }],
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Delivered', 'Cancelled'],
        default: 'Pending'
      },

    createAt: {type: Date ,default: Date.now},
    updateAt: {type: Date ,default: Date.now},
    deletedAt:{type: Date},
});
module.exports = mongoose.model("Delivery",deliverySchema);