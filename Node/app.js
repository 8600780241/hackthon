const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');
const multer = require('multer')
const connectdb = require('./Db/db');
const userController = require('./Controller/userController');
const productController = require('./Controller/productController');
const categoryController = require('./Controller/categoryController')

dotenv.config();
connectdb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'Uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single('userFile');

app.use('api/v1/user', userController);
app.use('api/v1/product', productController);
app.use('api/v1/category', categoryController);
app.post('/upload', storage, (req, res) => {
    res.send("file uploaded")
})
app.get('/', (req, res) => {
    return res.status(200).send({
        message: "ok"
    })
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is running on port ${port} at ${process.env.Devlopement_Mode}`)
})