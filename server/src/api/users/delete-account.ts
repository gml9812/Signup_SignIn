import express, { Request, Response } from 'express'
import { ApiResponse } from '@/types'
import { deleteUser } from '@/modules/database/schema/user'

const router = express.Router()

router.delete('/api/users/:userId', async (req: Request, res: Response) => {
  
  const deleteAccountResponse: ApiResponse = { err: null }

  const deleteAccountUser = await deleteUser({userId: req.params.userId})

  req.session.destroy((err) => {
    if (err) {
      console.error(err)
    }
  })

  res.json(deleteAccountResponse)
  })
  
export { router as deleteAccountRouter }


////
/*
fetch(`/api/users/gml9812`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
*/