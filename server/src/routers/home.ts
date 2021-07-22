import appRoot from 'app-root-path'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/welcome')
    return
  }
  
  res.sendFile(appRoot.resolve('/src/views-html/home.html'))
})

export { router as homeRouter }
