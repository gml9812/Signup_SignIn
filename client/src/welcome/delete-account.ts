import { fetchWrapper } from '@/main'
import { UserInfo } from '@@/../server/src/modules/database/schema/user'

const deleteAccountButton = document.querySelector('.delete-account-btn')
const userId = document.querySelector('#userId')

deleteAccountButton.addEventListener('click', async () => {
    // Check client side first
  
    const body = {} as UserInfo
  
    const response = await fetchWrapper('DELETE', `/users/${userId.innerHTML}`, body)
  
    if (response.err === null) {
      alert('계정이 삭제되었습니다.')
      window.location.href = '/'
    }
    else {
        alert(response.err)
    }
  })