//error 처리 안됨
//바꾸고 싶은 내용만 바꿀 수 있나?(완료)
//로그인 완료시에만 가능하도록? 

import express, { Request, Response } from 'express'
import { ApiResponse } from '@/types'
import { UserInfo, updateUser, findUser } from '@/modules/database/schema/user'
import { runInNewContext } from 'vm'

const router = express.Router()

router.patch('/api/users/:userId', async (req: Request, res: Response) => {

  //check if logged in
  if (!req.session.user) {
    return 
  }

  const userId = req.params.userId
  
  const changeInfoResponse: ApiResponse = { err: null }

  const changeInfoUser = await updateUser({
    userId: userId,
  },{
    $set: req.body
  })

  const [err, [foundUser, _]] = await findUser({ userId })

  /////changeInfoUser에는 err와 변경된 개수가 저장되어 있다. 
  req.session.user = foundUser

  res.json(changeInfoResponse)
  })
  
export { router as changeInfoRouter }


////
/*
bodyParam = 
  {"userId":"gml9812",
  "password":"$2b$10$OiqFQMuAOFvhSalH.aipSe/WRxHmvSVThOtYGNv0LtpoORauvl/oW",
  "email":"hee.jun.yun@gmail.comfnld",
  "name":"윤희준ee",
  "phone":"010-3275-9005",
  "_id":"YfDM5bir8ExeJeIz"}

bodyParam = {"email":"hee.jun.yun@gmail.comfnddld","name":"윤희준ee",}

fetch(`/api/users/gml9812`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(bodyParam),
})
*/
