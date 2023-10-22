const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        reuired: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const categoryModel = mongoose.model("categorydata", categorySchema);
module.exports = categoryModel;