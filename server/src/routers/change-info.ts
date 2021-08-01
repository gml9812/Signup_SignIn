import appRoot from 'app-root-path'
import express from 'express'

const router = express.Router()

router.get('/change-info', (req, res) => {
  if (!req.session.user) {
    res.redirect('/')
    return
  }
  
  res.sendFile(appRoot.resolve('/src/views-html/changeInfo.html'))
})

export { router as changeInfoRouter }