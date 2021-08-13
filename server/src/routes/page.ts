//const express = require('express')
import express from 'express'

const pageController = require('../controllers/page')

const router = express.Router();

router.get('/',pageController.home) 
router.get('/sign-in',pageController.signIn)
router.get('/sign-up',pageController.signUp)
router.get('/welcome',pageController.welcome)

//module.exports = router
export { router as pageRouter }