import express from 'express'

//signIn
import { ApiResponse } from '../types'
import { ErrMsg } from '../errors'
import { comparePassword, encryptPassword } from '../modules/encryption'

//create
import { validateBody } from '../middlewares/validate-body'

//update
import { UserInfo, createUser, updateUser, findUser, deleteUser, isUniqueUserId } from '../modules/database/schema/user'



exports.signIn = async (req, res) => {
    const signInResult: ApiResponse = {
        err: null,
      }
    
      const { userId, password } = req.body
      const [err, [foundUser, _]] = await findUser({ userId })
    
      if (!foundUser) {
        signInResult.err = {}
        signInResult.err.userId = ErrMsg.noneExistedUser
        res.send(signInResult)
        return
      }
    
      const isCorrectPassword = await comparePassword(
        password ?? '',
        foundUser.password
      )
    
      if (!isCorrectPassword) {
        signInResult.err = {}
        signInResult.err.password = ErrMsg.wrongPassword
        res.send(signInResult)
        return
      }
    
      req.session.user = foundUser
    
      res.send(signInResult)
}

exports.signOut = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
          console.error(err)
        }
      })
    
      res.redirect('/')
}

exports.create = async (req, res) => {
    const {
        userId,
        password,
        email,
        name,
        phone,
        address,
      } = req.body as UserInfo
  
      const signUpResponse: ApiResponse = { err: null }
  
      if (!(await isUniqueUserId(userId))) {
        signUpResponse.err = {}
        signUpResponse.err.userId = ErrMsg.duplicatedUserId
        return
      }
  
      const [, newUser] = await createUser({
        userId,
        password: await encryptPassword(password),
        email,
        name,
        phone,
        address,
      })
  
      req.session.user = newUser
  
      res.json(signUpResponse)
}

exports.update = async (req, res) => {
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

}

exports.delete = async (req, res) => {
    //check if logged in
  if (!req.session.user) {
    return 
  }
  
  const deleteAccountResponse: ApiResponse = { err: null }

  const deleteAccountUser = await deleteUser({userId: req.params.userId})

  req.session.destroy((err) => {
    if (err) {
      console.error(err)
    }
  })

  res.json(deleteAccountResponse)
}

exports.post = async (req,res) => {
  const { userId } = req.body as { userId: string }

  const result = await isUniqueUserId(userId)

  res.json(result)
}
