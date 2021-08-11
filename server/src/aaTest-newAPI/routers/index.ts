//const express = require('express')
import express from 'express'

//const userRouter = require('./user')
import { userRouter } from './user'

const router = express.Router()

router.use('/user',userRouter)

//module.exports = router
export { router as router }

