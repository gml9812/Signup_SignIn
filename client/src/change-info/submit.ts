import { checkEssentialPart, inputWrappers } from './essential-part'
import { getAddress, isOptionalChecked } from './optional-part'

import { UserInfo } from '@@/../server/src/modules/database/schema/user'
import { fetchWrapper } from '@/main'

const signUpButton = document.querySelector('.register-btn')
console.log(signUpButton)
signUpButton.addEventListener('click', async () => {
  // Check client side first
  const result = checkEssentialPart()

  if (typeof result !== 'boolean') {
    result.focus()
    return
  }

  const body = {} as UserInfo

  Object.keys(inputWrappers)
    .filter((key) => !key.includes('Confirm'))
    .forEach((key: keyof typeof inputWrappers) => {
      body[key] = inputWrappers[key].getValue()
    })

  // Optional address
  if (isOptionalChecked()) {
    body.address = getAddress()
  }

  const response = await fetchWrapper('PATCH', `/users/change-info/${body.userId}`, body)

  if (response.err === null) {
    alert('정보가 변경되었습니다.')
    window.location.href = '/welcome'
  }
  else {
      alert(response.err)
  }
})