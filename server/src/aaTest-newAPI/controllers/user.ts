import express, { Request, Response } from 'express'

//signIn
import { ApiResponse } from '@/types'
import { ErrMsg } from '@/errors'
import { comparePassword } from '@/modules/encryption'

//create
import {
    UserInfo,
    createUser,
    isUniqueUserId,
  } from '@/modules/database/schema/user'

import { encryptPassword } from '@/modules/encryption'
import { validateBody } from '@/middlewares/validate-body'

//update
import { UserInfo, updateUser, findUser, deleteUser } from '@/modules/database/schema/user'
import { runInNewContext } from 'vm'



exports.signIn = async (req: Request, res: Response) => {

}

exports.signOut = async (req: Request, res: Response) => {

}

exports.create = async (req: Request, res: Response) => {

}

exports.update = async (req: Request, res: Response) => {

}

exports.delete = async (req: Request, res: Response) => {

}
