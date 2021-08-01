import { welcomeRouter } from './welcome'
import express from 'express'
import { isUniqueUserIdRouter } from './validate-user-id'
import { signInRouter } from './sign-in'
import { signOutRouter } from './sign-out'
import { signUpRouter } from './sign-up'
//added
import { changeInfoRouter } from './change-info'

const router = express.Router()

router.use(signUpRouter)
router.use(signInRouter)
router.use(welcomeRouter)
router.use(signOutRouter)
router.use(isUniqueUserIdRouter)
//added
router.use(changeInfoRouter)

export { router as api }
