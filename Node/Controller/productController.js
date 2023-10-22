const productModel = require("../models/productmodels");

exports.addProductController = async (req, res) => {
    try {
        const { category, productName, packSize, MRP, productImage, status } = req.body;
        if (!category || !productName || !packSize || !MRP || !productImage || !status) {
            return res.status(400).send({
                message: "all fields are maandotory to filled"
            })
        }
        const products = await new productModel({ category, productName, packSize, MRP, productImage, status }).save();
        return res.status(200).send({
            message: "data has saved"
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "error in callback"
        })
    }
}

exports.getAllProductController = async (req, res) => {
    try {
        const product = await productModel.find({});
        return res.status(200).send({
            message: " all products "
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error in callback"
        })
    }
}


