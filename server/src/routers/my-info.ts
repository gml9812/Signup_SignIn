import express from 'express'

const router = express.Router()

router.get('/my-info', (req, res) => {
  if (!req.session.user) {
    res.redirect('/')
    return
  }
  
  res.render('my-info/my-info.pug', {})
})

export { router as myInfoRouter }