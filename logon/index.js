const email = document.querySelector('#email');
const nick = document.querySelector('#nick');
const pwd = document.querySelector('#pwd');
const pwdAgain = document.querySelector('#pwd-again');

const showBtn = document.querySelector('.show-hide-button');

function isValidateEmail (elem) {
  console.log('validateEmail Activated');
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(elem);
}

function validateEmail (elem) {
  if(isValidateEmail(elem) === false){
    elem.classlist.add('error');
  }
}

function validatePwd (elem) {
  if(elem.length < 8 || elem.trim() === ''){
    elem.classlist.add('error');
    let div = document.createElement('div');
    div.textContent = '비밀번호 8자 이상 입력해주세요.'
  } else {
    elem.classlist.remove('error');
  }
}

// 심화 요구사항
function showPwd (elem) {
  console.log('showPwd activated');
}

function activateButton () {
  console.log('Activating Button.');
}

email.addEventListener('blur', validateEmail);
pwd.addEventListener('blur', validatePwd);

showBtn.addEventListener('click', showPwd);