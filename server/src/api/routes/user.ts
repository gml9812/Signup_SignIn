//const express = require('express')
import express from 'express'

//const userController = require('../controllers/user')
import { signIn, signOut, createId, updateId, deleteId, isUnique } from '../controllers/user'

const router = express.Router();

router.post('/signIn',signIn) //sign-in
router.get('/signOut',signOut) //sign-out
router.post('/',createId) //sign-up

//temporary@@@
router.post('/isUnique',isUnique)

//router.use(isValidJwtToken) //아래 항목은 jwt 토큰 검사가 필요함. 
router.patch('/',updateId) //change-info
router.delete('/',deleteId) //delete-account

//module.exports = router
export { router as userRouter }