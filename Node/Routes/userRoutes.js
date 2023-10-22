const express  = require('express');
const {getAllUserController,loginUserController,registerUserController} = require("../Controller/userController")
const router = express.Router();


router.get("/getallUser",getAllUserController);
router.post('/userlogin',loginUserController);
router.post('/userregister',registerUserController);

module.exports = router;