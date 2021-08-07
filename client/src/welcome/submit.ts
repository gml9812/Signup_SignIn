import { fetchWrapper } from '@/main'
import { UserInfo } from '@@/../server/src/modules/database/schema/user'

const deleteAccountButton = document.querySelector('.delete-account-btn')
console.log(deleteAccountButton)

deleteAccountButton.addEventListener('click', async () => {
  // Check client side first

  console.log("aa")

  const body = {} as UserInfo

  const response = await fetchWrapper('PATCH', `/users/change-info/${body.userId}`, body)

  if (response.err === null) {
    alert('정보가 변경되었습니다.')
    window.location.href = '/welcome'
  }
  else {
      alert(response.err)
  }
})