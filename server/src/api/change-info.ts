import express, { Request, Response } from 'express'

const router = express.Router()

router.post('/api/change-info', async (req: Request, res: Response) => {

    //
    console.log(req.session)

    res.redirect('/')
  })
  
  export { router as changeInfoRouter }
