import express from 'express'

const router = express.Router()

router.get('/change-info', (req, res) => {
  res.render('change-info.pug', {})
})

export { router as myInfoRouter }