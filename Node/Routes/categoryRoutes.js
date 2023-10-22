const express = require("express");
const router = express.Router();
import { addCategoryController,getAllCategoryController } from "../Controller/categoryController";


router.post('/addcategory',addCategoryController);
router.get('/getcategory',getAllCategoryController);

exports.module = router;