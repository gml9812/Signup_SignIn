import express from 'express'

const router = express.Router()

router.get('/change-info', (req, res) => {
  res.render('my-info/change-info.pug', {
    currentUser: req.session.user,
  })
})

export { router as changeInfoRouter }