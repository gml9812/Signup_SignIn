//const express = require('express')
import express from 'express'

//const userRouter = require('./user')
import { userRouter } from './user'
import { pageRouter } from './page'

const router = express.Router()

router.use('/user',userRouter)
router.use('/page',pageRouter)

//module.exports = router
export { router as routes }

