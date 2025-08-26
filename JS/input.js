const emailInput = document.querySelector('#user-email');
const pwdInput = document.querySelector('#user-pwd');
const loginBtn = document.querySelector('.login__btn');
let emailErrorMessage;
let pwdErrorMessage;

// 페이지 로드 시 p태그의 오류메시지 있으면 지우기
window.addEventListener('DOMContentLoaded', () => {
  if (emailErrorMessage) {
    emailErrorMessage.remove();
    emailErrorMessage = null;
  }
  if (pwdErrorMessage) {
    pwdErrorMessage.remove();
    pwdErrorMessage = null;
  }
});

// 이메일 체크
function checkEmail() {
  if (emailInput.value === '') {
    if (!emailErrorMessage) {
      emailErrorMessage = document.createElement('p');
      emailErrorMessage.classList.add('input-wrong__message');
      emailInput.insertAdjacentElement('afterend', emailErrorMessage);
    }
    emailErrorMessage.textContent = '이메일을 입력해 주세요.';
    emailInput.classList.add('input-wrong');

    return false;
  } else if (emailInput.validity.typeMismatch) {
    if (!emailErrorMessage) {
      emailErrorMessage = document.createElement('p');
      emailErrorMessage.classList.add('input-wrong__message');
      emailInput.insertAdjacentElement('afterend', emailErrorMessage);
    }
    emailErrorMessage.textContent = '잘못된 이메일 형식입니다.';
    emailInput.classList.add('input-wrong');

    return false;
  } else {
    if (emailErrorMessage) {
      emailErrorMessage.remove();
      emailErrorMessage = null;
    }
    emailInput.classList.remove('input-wrong');
  }
  return true;
}

//비밀번호 체크
function checkPwd() {
  if (pwdInput.value === '') {
    if (!pwdErrorMessage) {
      pwdErrorMessage = document.createElement('p');
      pwdErrorMessage.classList.add('input-wrong__message');
      pwdInput.insertAdjacentElement('afterend', pwdErrorMessage);
    }
    pwdErrorMessage.textContent = '비밀번호를 입력해 주세요.';
    pwdInput.classList.add('input-wrong');

    return false;
  } else if (pwdInput.value.length < 8) {
    if (!pwdErrorMessage) {
      pwdErrorMessage = document.createElement('p');
      pwdErrorMessage.classList.add('input-wrong__message');
      pwdInput.insertAdjacentElement('afterend', pwdErrorMessage);
    }
    pwdErrorMessage.textContent = '비밀번호를 8자 이상 입력해주세요.';
    pwdInput.classList.add('input-wrong');

    return false;
  } else {
    if (pwdErrorMessage) {
      pwdErrorMessage.remove();
      pwdErrorMessage = null;
    }
    pwdInput.classList.remove('input-wrong');
  }
  return true;
}

function activeBtn() {
  if (checkEmail() && checkPwd()) {
    loginBtn.classList.add('active');
  } else {
    loginBtn.classList.remove('active');
  }
}

emailInput.addEventListener('focusout', () => {
  checkEmail();
  activeBtn();
});

pwdInput.addEventListener('focusout', () => {
  checkPwd();
  activeBtn();
});
