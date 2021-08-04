import express from 'express'
import { homeRouter } from './home'
import { signUpRouter } from './sign-up'
import { signInRouter } from './sign-in'
import { myInfoRouter } from './my-info'
import { welcomeRouter } from './welcome'

const router = express.Router()

router.use(homeRouter)
router.use(signUpRouter)
router.use(signInRouter)
router.use(myInfoRouter)
router.use(welcomeRouter)

export { router as routers }

