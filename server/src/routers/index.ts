import express from 'express'
import { homeRouter } from './home'
import { signUpRouter } from './sign-up'
import { signInRouter } from './sign-in'
import { changeInfoRouter } from './change-info'

const router = express.Router()

router.use(homeRouter)
router.use(signUpRouter)
router.use(signInRouter)
router.use(changeInfoRouter)

export { router as routers }

