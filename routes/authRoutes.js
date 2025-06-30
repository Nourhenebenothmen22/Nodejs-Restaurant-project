const express=require('express')
const { registerController, loginController, ResetPasswordController, ForgotPasswordController } = require('../controllers/authControllers')
const { registerValidation } = require('../middleware/userValidator');
const requireSignIn = require('../middleware/authMiddleware');
const router=express.Router()
router.post('/register',registerValidation,registerController)
router.post('/login',loginController)
router.post('/Reset',requireSignIn,ResetPasswordController)
router.post('/updatePassword',ForgotPasswordController)

module.exports=router