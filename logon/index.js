const email = document.querySelector('#email');
const nick = document.querySelector('#nick');
const pwd = document.querySelector('#pwd');
const pwdAgain = document.querySelector('#pwd-again');

const signupBtn = document.querySelector('.signup-button');
const loginBtn = document.querySelector('.login-button');
const showBtn = document.querySelector('.show-hide-button');
const showBtnAgain = document.querySelector('.show-hide-button-again');

//이메일 형식 검사함수
function isValidateEmail (value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(value);
}

//조건에 부합하지 않으면 여기서 error 클래스를 받아갑니다.
function addElement (element, err, message) {
  element.parentElement.classList.add("err");
  let div = document.createElement('div');
  div.textContent = message;
  div.classList.add(err);
  element.parentElement.append(div);
}

//이메일이 유효한지 검사합니다.
function validateEmail () {
  let existMsg = document.querySelector('.emailErr');
  
  if(email.value.trim() ===''){
    if(!existMsg){
      addElement(email, 'emailErr', '이메일을 입력해주세요.')
    }
  } else if(!isValidateEmail(email.value)){
    if(!existMsg){
      addElement(email, 'emailErr', '잘못된 이메일 형식입니다.')
    }
  } else {
    email.parentElement.classList.remove("err");

    if(existMsg){
      existMsg.remove();
    }
  }
}

//비밀번호가 유효한지 검사합니다.
function validatePwd () {
  let existMsg = document.querySelector('.pwdErr');

  if(pwd.value.trim() === ''){
    if(!existMsg){
      addElement(pwd, 'pwdErr', '비밀번호를 입력해주세요.')
    }
  } else if(pwd.value.length < 8){    
    if(!existMsg){
      addElement(pwd, 'pwdErr', '비밀번호를 8자 이상 입력해주세요.')
    }
  } else {
    pwd.parentElement.classList.remove('err');
    if(existMsg){
      existMsg.remove();
    }
  }
}

//닉네임이 유효한지 검사합니다.
function validateNick () {
  let existMsg = document.querySelector('.nickErr');
  
  if(nick.value.trim() ===''){
    if(!existMsg){
      addElement(nick, 'nickErr', '닉네임을 입력해주세요.')
    }
  } else {
    nick.parentElement.classList.remove("err");
    if(existMsg){
      existMsg.remove();
    }
  }
}

//비밀번호와 일치하게 적었는지 검사합니다.
function validatePwdAgain () {
  let existMsg = document.querySelector('.pwdAgainErr');

  if(pwdAgain.value !== pwd.value){
    if(!existMsg){
      addElement(pwdAgain, 'pwdAgainErr', '비밀번호가 일치하지 않습니다.')
    }
  } else {
    pwdAgain.parentElement.classList.remove('err');

    if(existMsg){
      existMsg.remove();
    }
  }
}

//위 조건들을 부합하면 버튼이 활성화됩니다.
function activateButton() {
  // 로그인 버튼
  if (loginBtn) {
    const emailValid = email && isValidateEmail(email.value);
    const pwdValid = pwd && pwd.value.length >= 8;
    loginBtn.disabled = !(emailValid && pwdValid);
  }

  // 회원가입 버튼
  if (signupBtn) {
    const emailValid = email && isValidateEmail(email.value);
    const nickValid = nick && nick.value.trim() !== '';
    const pwdValid = pwd && pwd.value.length >= 8;
    const pwdAgainValid = pwdAgain && pwdAgain.value === pwd.value && pwd.value.length >= 8;

    signupBtn.disabled = !(emailValid && nickValid && pwdValid && pwdAgainValid);
  }
}

// 심화 요구사항
function showPwd () {
  if(pwd){
    if(pwd.type === 'password'){
      showBtn.classList.add('show');
      pwd.type = 'text';
    } else {
      showBtn.classList.remove('show');
      pwd.type = 'password';
    }
  } 
}

function showAgainPwd() {
  if(pwdAgain) {
    if(pwdAgain.type === 'password'){
      showBtnAgain.classList.add('show');
      pwdAgain.type = 'text';
    } else {
      showBtnAgain.classList.remove('show');
      pwdAgain.type = 'password';
    }
  }
}

if(email) email.addEventListener('blur', validateEmail);
if(pwd) pwd.addEventListener('blur', validatePwd);
if(pwdAgain) pwdAgain.addEventListener('blur', validatePwdAgain);
if(nick) nick.addEventListener('blur', validateNick);  

if(email) email.addEventListener('input', activateButton);
if(pwd) pwd.addEventListener('input', activateButton);
if(pwdAgain) pwdAgain.addEventListener('input', activateButton);
if(nick) nick.addEventListener('input', activateButton);  
if(showBtn) showBtn.addEventListener('click', showPwd);
if(showBtnAgain) showBtnAgain.addEventListener('click', showAgainPwd);