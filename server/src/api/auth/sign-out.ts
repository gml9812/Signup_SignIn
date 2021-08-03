//import '../middlewares/current-user' //이 파트는 왜 있는 거지?

import express, { Request, Response } from 'express'

//import { deleteUserToken } from '@/modules/database/schema/userToken'

const router = express.Router()

router.get('/api/auth/sign-out', async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
    }
  })

  res.redirect('/')
})

export { router as signOutRouter }
