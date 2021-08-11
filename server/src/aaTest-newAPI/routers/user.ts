//const express = require('express')
import express from 'express'

const userController = require('../controllers/user')

const { isUserIdValid } = require('../middlewares/auth')

const router = express.Router();

router.post('/sign-in',userController.signIn) //sign-in
router.get('/sign-out',userController.signOut) //sign-out
router.post('/',isUserIdValid,userController.create) //sign-up

//router.use(isValidJwtToken) //아래 항목은 jwt 토큰 검사가 필요함. 
router.patch('/',userController.update) //change-info
router.delete('/',userController.delete) //delete-account

//module.exports = router
export { router as userRouter }