// 에러 메시지 출력
function showErrorMessage(inputEl, message){
  inputEl.classList.add('error');

  const parentEl = inputEl.parentNode.parentNode;
  const errorElement = parentEl.querySelector('div.error');
  if(errorElement) errorElement.remove();

  errorEl = document.createElement('div');
  errorEl.classList.add('error');
  errorEl.innerText = message;
  parentEl.appendChild(errorEl);
}
// 에러 메시지 제거
function removeErrorMessage(inputEl){
  const parentEl = inputEl.parentNode.parentNode;
  inputEl.classList.add('atv');
  inputEl.classList.remove('error');
  const errorElement = parentEl.querySelector('div.error');
  if(errorElement){
    errorElement.remove(); 
  }
}

const inputs = document.querySelectorAll('.authForm input');
const formBtn = document.querySelector('.authForm .btn.lg');

// 각 입력창 유효성 검사
function validInput(e){
  const value = e.target.value.trim();
  if(e.target.name === 'email') {// 이메일 검사
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(value.length === 0){
      showErrorMessage(e.target, "이메일을 입력해주세요.");
    }else if(!emailReg.test(value)){
      showErrorMessage(e.target, "잘못된 이메일 형식입니다.");
    }else{
      removeErrorMessage(e.target);
    }
  } else if(e.target.name === 'pw') { // 패스워드 검사
    if(value.length === 0){
      showErrorMessage(e.target, "비밀번호를 입력해주세요");
    }else if(value.length < 8){
      showErrorMessage(e.target, "비밀번호를 8자 이상 입력해주세요.");
    }else{
      removeErrorMessage(e.target);
    }

    // 패스워드 확인 검사
    const pwCheck = document.querySelector('.authForm input[name="pwCheck"]');
    if(pwCheck && pwCheck.value.trim().length > 0){
      if(value !== pwCheck.value.trim()){
        showErrorMessage(pwCheck, "비밀번호가 일치하지 않습니다..");
      }else{
        removeErrorMessage(pwCheck);
      }
    }
  } else if(e.target.name === 'pwCheck') { // 패스워드 확인 검사
    const pw = document.querySelector('.authForm input[name="pw"]');
    const pwValue = pw.value.trim();

    if(value.length === 0){
      showErrorMessage(e.target, "비밀번호를 입력해주세요");
    }else if(value !== pwValue){
      showErrorMessage(e.target, "비밀번호가 일치하지 않습니다..");
    }else{
      removeErrorMessage(e.target);
    }
  } else if(e.target.name === 'username') { // 닉네임 검사
    if(value.length === 0){
      showErrorMessage(e.target, "닉네임을 입력해주세요.");
    }else{
      removeErrorMessage(e.target);
      e.target.classList.add('atv');
    }
  }
}
// 로그인/회원가입 버튼 버튼 활성화
function btnActive(){
  let isValid = true;
  inputs.forEach((input) => {
    // 하나라도 비어있거나 에러가 있으면 비활성화
    if(input.value.trim().length === 0 || input.classList.contains('error') || !input.classList.contains('atv')){
      isValid = false;
    }

    if(isValid){
      formBtn.classList.add('atv');
      formBtn.disabled = false;
    }else{
      formBtn.classList.remove('atv');
      formBtn.disabled = true;
    }
  })
}
inputs.forEach((input) => {
  input.addEventListener('focusout', validInput); // 포커스 아웃 시 유효성 검사
  input.addEventListener('input', btnActive); // 입력 시 버튼 활성화 검사
  input.addEventListener('focusout', btnActive); // 포커스 아웃 시 버튼 활성화 검사
})

// 로그인/회원가입 버튼 링크
formBtn.addEventListener('click', (e) => {
  if(formBtn.classList.contains('atv')){
    e.preventDefault();
    if(e.target.name === 'signup'){
      window.location.href = '/login';
    }else if(e.target.name === 'login'){
      window.location.href = '/items';
    }
  }
})

// 비밀번호 표시/숨김 토글
const btnEye = document.querySelectorAll('.btnEye'); 
btnEye.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const input = e.currentTarget.previousElementSibling;
    if(input.type === 'password'){
      input.type = 'text';
      e.currentTarget.classList.add('on');
      e.currentTarget.querySelector('span').innerText = '비밀번호 숨김';
    }else{
      input.type = 'password';
      e.currentTarget.classList.remove('on');
      e.currentTarget.querySelector('span').innerText = '비밀번호 표시';
    }
  })
})