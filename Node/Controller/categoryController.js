const categoryModel = require("../models/categorymodels");


exports.addCategoryController = async (req, res) => {
    try {
        const { categoryName, description, status } = req.body;
        if (!categoryName || !description || !status) {
            return res.status(400).send({
                message: "all fields are maandotory to filled"
            })
        }
        const category = await new categoryModel({ categoryName, description, status }).save();
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

exports.getAllCategoryController= async (req, res) => {
    try {
        const category = await categoryModel.find({});
        return res.status(200).send({
            message: " all category "
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error in callback"
        })
    }
}