const express=require('express')
const { registerController, loginController } = require('../controllers/authControllers')
const { registerValidation } = require('../middleware/userValidator');
const router=express.Router()
router.post('/register',registerValidation,registerController)
router.post('/login',loginController)

module.exports=router