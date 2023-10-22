const express = require("express");
const router = express.Router();


import { addProductController,getAllProductController } from "../Controller/productController";
router.post('/addproduct',addProductController);
router.get('/getproducts',getAllProductController);
exports.module = router;