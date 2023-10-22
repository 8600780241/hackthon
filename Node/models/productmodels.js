const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        reuired:true
    },
    packSize:{
        type:Number,
        required:true
    },
    MRP:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const productModel = mongoose.model("productdata",productSchema);
module.exports = productModel;