const userModel = require('../models/usermodels');
const bcrypt = require("bcrypt");

exports.getAllUserController = async (req, res) => {
    try {
        const user = await userModel.find({})
        return res.status(200).send({
            message: "All user info are get it"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "user not get",
            error
        })
    }
}

exports.loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                message: 'all fiels are neccessary to fill'
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                message: "email does not exist"
            })
        }
        const isMatched = bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).send({
                message: "invalid password"
            })
        }
        return res.status(200).send({
            message: "login successfully"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(404).send({
            message: "error in callback",
            error
        })
    }
}

exports.registerUserController = async (req, res) => {
    try {
        const {email,password } = req.body;
        if(!email, !password) {
            res.status(400).send({
                message:"fill all fields"
            })
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            res.status(404).send({
                message:"user exist"
            })
        }
        const hashpassword = bcrypt.hash(password,10);
        const user = await new userModel({email,hashpassword}).save();
        return res.status(200).send({
            message:"register successfully"
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).send(
            { message: "error while register a user" }
        )
    }
}