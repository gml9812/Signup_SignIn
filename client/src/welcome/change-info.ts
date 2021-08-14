import { getModalContent } from './modal-content'
import { UserInfo } from '@@/../server/src/modules/database/schema/user'
import { fetchWrapper } from '@/main'

const userInfoContainer = document.querySelector('.user-info-container')
const modal = document.querySelector('.modal')

const userId = document.querySelector('#userId')


function setModalContent(content: string) {
    modal.querySelector('.modal-main').innerHTML = content
}

function showModal() {
    modal.classList.add('visible')
}

function hideModal() {
    modal.classList.remove('visible')
}

async function changeInfo(input) {
    const body = {} as UserInfo

    body[input.name] = input.value

    const response = await fetchWrapper('PATCH', `/users/`, body)
  
    if (response.err === null) {
      alert('변경되었습니다.')
      window.location.href = '/api/page/welcome'
    }
}

/*
;(document.querySelector('.modal .bg') as HTMLElement).addEventListener(
'click',
() => {
    hideModal()
}
)

;(document.querySelector('.modal .close') as HTMLElement).addEventListener(
'click',
() => {
    hideModal()
}
)

;(document.querySelector('.modal .cancle') as HTMLElement).addEventListener(
'click',
() => {
    hideModal()
}
)
*/

userInfoContainer.addEventListener('click', (e) => {
    let target = e.target as HTMLElement

    if (target.className === 'user-info-content') {
        setModalContent(getModalContent(target.id))
        showModal()
    }
  })

modal.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    let closeBtns = ["cancle","close","bg"]

    if (target.className === "ok") {
        changeInfo(document.querySelector('.input-text'))
    } else if (closeBtns.includes(target.className)) {
        hideModal()
    } 
  })