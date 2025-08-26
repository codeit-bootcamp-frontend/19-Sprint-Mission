function noEmail () {
  alert('이메일을 입력해주세요.');
};

function wrongEmail () {
  alert('잘못된 이메일 형식입니다.');
}

function noPwd () {
  alert('비밀번호를 입력해주세요.');
}

function wrongPwd () {
  alert('비밀번호를 8자 이상 입력해주세요.');
}

function activateButton () {
  console.log('Activating Button.');
}

const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
