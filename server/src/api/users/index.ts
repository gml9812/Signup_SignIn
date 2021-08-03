import express from 'express'
import { changeInfoRouter } from './change-info'
import { signUpRouter } from './sign-up'
import { deleteAccountRouter } from './delete-account'

const router = express.Router()

router.use(changeInfoRouter)
router.use(signUpRouter)
router.use(deleteAccountRouter)
export { router as users }