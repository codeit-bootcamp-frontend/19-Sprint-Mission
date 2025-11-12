const form = document.querySelector('form');
const inputs = form.querySelectorAll('input')
const join_btn = document.getElementById('joinBtn');
let emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let passwordRegex = /^.{8,}$/;

//공통 오류 메시지 생성/삭제 함수
function showError(input,message){
    removeError(input);
    let newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    newParagraph.classList.add('notice');
    input.after(newParagraph);

}
function removeError(input){
    const existing = input.parentNode.querySelector('.notice');
    if(existing) existing.remove();
}
//각 input을 다루는 함수들
const handlers = {
  email: function(input) {
    const value = input.value.trim();
    if(value === ''){
        showError(input,'이메일을 입력해주세요.')
        return false;
    }else if(!emailRegex.test(value)){
        showError(input,'잘못된 이메일 형식입니다.')
        return false;
    }else{
        removeError(input);
        return true;
    }
  },
  nickname: function(input) {
    const value = input.value.trim();
    if(value === ''){
        showError(input,'닉네임을 입력해주세요.')
        return false; 
    }else{
        removeError(input);
        return true;
    }
  },
  password: function(input) {
    const value = input.value.trim();
    if(value === ''){
        showError(input,'비밀번호를 입력해주세요.')
        return false;
    }else if(!passwordRegex.test(value)){
        showError(input,'비밀번호를 8자 이상 입력해주세요.')
        return false;
    }else{
        removeError(input);
        return true;
    }
  },
  passwordConfirm: function(input) {
    const value = input.value.trim();
    const pw = document.getElementById('password').value.trim();
    if(value === ''){
        showError(input,'비밀번호를 다시 입력해주세요.')
        return false;
    }else if(value !== pw){
        showError(input,'비밀번호가 일치하지 않습니다..')
        return false;
    }else{
        removeError(input);
        return true;
    }
  }
};

// 공통 focusout 이벤트
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    const type = input.name;
    if(handlers[type]) {
      handlers[type](input);
    }
    updateButtonState();
  });
});

//회원가입 버튼 이벤트
function updateButtonState(){
    const notices = document.querySelectorAll('.notice');
    const empty = [...inputs].some(input => input.value.trim() === '');
    if(notices.length > 0 || empty) {
        join_btn.disabled = true;
    } else {
        join_btn.disabled = false;
    }
}
//회원가입 버튼 작동
join_btn.addEventListener('click', (e) => {
    e.preventDefault();
    updateButtonState();
    if (!join_btn.disabled) { 
        window.location.href = 'signin.html'; 
    }
});