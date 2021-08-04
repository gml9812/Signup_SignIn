import appRoot from 'app-root-path'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/sign-in')
  return
})

export { router as homeRouter }
