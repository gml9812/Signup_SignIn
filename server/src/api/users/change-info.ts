import express, { Request, Response } from 'express'
import { ApiResponse } from '@/types'
import { UserInfo, updateUser } from '@/modules/database/schema/user'

const router = express.Router()

router.put('/api/users/:userId', async (req: Request, res: Response) => {
  const {
    userId,
    password,
    email,
    name,
    phone,
    address,
  } = req.body as UserInfo

  const changeInfoResponse: ApiResponse = { err: null }

  const changeInfoUser = await updateUser({
    userId: req.params.userId
  },{
    userId,
    password,
    email,
    name,
    phone,
    address,
  })

  console.log(req.session)



  //req.session.user = changeInfoUser /////changeInfoUser에는 err와 변경된 개수가 저장되어 있다. 

  res.json(changeInfoResponse)
  })
  
export { router as changeInfoRouter }


////
/*
fetch(`/api/users/1123`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
})
*/
