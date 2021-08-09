const name = `
<h1 class="modal-head">변경하실 이름을 입력하세요</h1>
<div class="input-wrapper name">
              <div class="input-icon name">
                <i class="icon">person</i>
              </div>
              <input
                class="input-text"
                placeholder="이름"
                type="text"
                name="name"
                spellcheck="false"
              />
              <div class="check">
                <i class="icon">checkmark_alt_circle_fill</i>
              </div>
              <div class="msg-field">
                <span class="msg-text"></span>
              </div>
            </div>
`

const userId = `
<h1 class="modal-head">변경하실 아이디를 입력하세요</h1>
<div class="input-wrapper id">
              <div class="input-icon id">
                <i class="icon">tag</i>
              </div>
              <input
                class="input-text"
                placeholder="아이디"
                type="text"
                name="userId"
                spellcheck="false"
                autocomplete="off"
              />
              <div class="check">
                <i class="icon">checkmark_alt_circle_fill</i>
              </div>
              <div class="msg-field">
                <span class="msg-text"></span>
              </div>
            </div>
`

const email = `
<h1 class="modal-head">변경하실 이메일을 입력하세요</h1>
<div class="input-wrapper email">
    <div class="input-icon email">
        <i class="icon">envelope</i>
    </div>
    <input
    class="input-text"
    placeholder="이메일"
    type="email"
    name="email"
    />
    <div class="check">
        <i class="icon">checkmark_alt_circle_fill</i>
    </div>
    <div class="msg-field">
        <span class="msg-text"></span>
    </div>
</div>
`
const phone = `
<h1 class="modal-head">변경하실 휴대폰을 입력하세요</h1>
<div class="input-wrapper phone">
              <div class="input-icon phone">
                <i class="icon">phone</i>
              </div>
              <input
                class="input-text"
                placeholder="휴대폰"
                type="tel"
                name="phone"
              />
              <button class="action">인증받기</button>
              <div class="msg-field">
                <span class="msg-text"></span>
              </div>
            </div>
`

export function getModalContent(content: string) :string {
    return eval(content)
}