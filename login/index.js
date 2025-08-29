//함수 로직
// 1. 인풋컨테이너 디브 생성 
// 2. 인풋 이미지 아우터 html 인풋의 text.content로 삽입한다.
// 3. 스펜태그를 만든다. 
// 4. 스펜태그에 클래스명 error-message를 집어넣는다.
// 5. 스팬태그를 인풋컨테이너 디브 마지막 지식으로 추가한다.
// 6. 인풋 래퍼의 마지막 자식 삭제, 
// 7. 인풋 래퍼의 마지막 자식으로 추가
//이벤트: focusout 조건: input.value.length<8

//이메일 경고
const emailInput = document.querySelector('.input-wrapper.email')

const wrongEmailErr = document.createElement('span');
wrongEmailErr.classList.add('error-message');
wrongEmailErr.textContent = '잘못된 이메일 형식입니다.';

const nullInput = document.createElement('span');
nullInput.classList.add('error-message');
nullInput.textContent = '이메일을 입력해주세요.';

function emailErr(e){
  const lastChildOfEmail = emailInput.lastElementChild
  if(!e.target.checkValidity() && lastChildOfEmail.className!=='email-container'){
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container')
    emailContainer.innerHTML = lastChildOfEmail.outerHTML;
    (!e.target.value)?emailContainer.append(nullInput):emailContainer.append(wrongEmailErr) 
    lastChildOfEmail.remove();
    emailInput.append(emailContainer);
  }
}
//비밀번호 경고
const passwordInput = document.querySelector('.input-wrapper.password')
const pwErrorMessage = document.createElement('span');
pwErrorMessage.classList.add('error-message');
pwErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';

const nullInputPw = document.createElement('span');
nullInputPw.classList.add('error-message');
nullInputPw.textContent = '비밀번호를 입력해주세요.'

function passwordErr(e){
  const lastChildOfPw = passwordInput.lastElementChild
  if(lastChildOfPw.className!=='pw-container' && e.target.value.length<8){
    const pwContainer = document.createElement('div');
    pwContainer.classList.add('pw-container')
    pwContainer.innerHTML = lastChildOfPw.outerHTML;
    (!e.target.value) ? pwContainer.append(nullInputPw) :pwContainer.append(pwErrorMessage);
    lastChildOfPw.remove();
    passwordInput.append(pwContainer);
  }
}
// //비밀번호 확인 경고
// const pwCheckInput = document.querySelector('.pw-checker')
// const notSameErr = document.createElement('span');
// notSameErr.classList.add('error-message');
// notSameErr.textContent = '비밀번호가 일치하지 않습니다.';
// const userPw = passwordInput.querySelector('#user-password')

// function pwCheck (e){
//   const lastChildOfPwChecker = pwCheckInput.lastElementChild
//   if(e.target.value !== userPw.value){
//     const checkerContainer = document.createElement('div');
//     checkerContainer.classList.add('checker-container')
//     checkerContainer.innerHTML = lastChildOfPwChecker.outerHTML;
//     checkerContainer.append(notSameErr)
//     lastChildOfPwChecker.remove();
//     pwCheckInput.append(checkerContainer);
//   }
// }


function clearEmail(){
  if(emailInput.lastElementChild.className==='email-container'){
    const emailContainer = emailInput.querySelector('.email-container')
    const inputEmail = emailInput.querySelector('#user-email')
    emailInput.append(inputEmail)
    emailContainer.remove()
  }
}
function clearPw(){
  if(passwordInput.lastElementChild.className==='pw-container'){
    const pwContainer = passwordInput.querySelector('.pw-container')
    const inputImage = passwordInput.querySelector('.input-image')
    pwContainer.remove()
    passwordInput.append(inputImage)
  }
}

// function clearChecker(){
//   if(pwCheckInput.lastElementChild.className==='checker-container'){
//     const checkerContainer = pwCheckInput.querySelector('.checker-container')
//     const checkerImage = pwCheckInput.querySelector('.input-image.pw-checker')
//     checkerContainer.remove()
//     pwCheckInput.append(checkerImage)
//   }
// }
const applyButton = document.querySelector('form > button')
function activateButton(e){
  const errMessage = document.querySelector('.error-message')
  if(!errMessage){
    applyButton.classList.add('activate')
  } 
}
passwordInput.addEventListener('focusout',clearPw)
passwordInput.addEventListener('focusout', passwordErr)
emailInput.addEventListener('focusout',clearEmail)
emailInput.addEventListener('focusout', emailErr)
// pwCheckInput.addEventListener('focusout', clearChecker)
// pwCheckInput.addEventListener('focusout', pwCheck)
document.addEventListener('input',activateButton)
