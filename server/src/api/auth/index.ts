import express from 'express'
import { isUniqueUserIdRouter } from './validate-user-id'
import { signInRouter } from './sign-in'
import { signOutRouter } from './sign-out'

const router = express.Router()

router.use(signInRouter)
router.use(signOutRouter)
router.use(isUniqueUserIdRouter)

export { router as auth }
