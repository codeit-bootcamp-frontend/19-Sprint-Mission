const emailInput = document.querySelector('#user-email');
const pwdInput = document.querySelector('#user-pwd');
const pwdCheck = document.querySelector('#user-pwd-check');
const nicknameInput = document.querySelector('#user-nickname');
const loginBtn = document.querySelector('.login__btn');

//에러메시지 표시 함수
function showErrorMessage(input, message) {
  //input 파라미터로 받은 요소의 부모요소의 error__message를 가지고 있는 자식요소 검색
  const errorMessage = input.parentElement.querySelector('.error__message');
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  input.classList.add('input-wrong');
}
//에러메시지 숨김 함수
function hideErrorMessage(input) {
  const errorMessage = input.parentElement.querySelector('.error__message');
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
  input.classList.remove('input-wrong');
}

// 이메일 체크
function checkEmail() {
  if (emailInput.value === '') {
    showErrorMessage(emailInput, '이메일을 입력해 주세요.');
    return false;
  } else if (emailInput.validity.typeMismatch) {
    showErrorMessage(emailInput, '잘못된 이메일 형식입니다.');
    return false;
  } else {
    hideErrorMessage(emailInput);
    return true;
  }
}
//닉네임 체크
function checkNickname() {
  if (nicknameInput.value === '') {
    showErrorMessage(nicknameInput, '닉네임을 입력해 주세요.');
    return false;
  } else {
    hideErrorMessage(nicknameInput);
    return true;
  }
}
//비밀번호 체크
function checkPwd() {
  if (pwdInput.value === '') {
    showErrorMessage(pwdInput, '비밀번호를 입력해 주세요.');
    return false;
  } else if (pwdInput.value.length < 8) {
    showErrorMessage(pwdInput, '비밀번호를 8자 이상 입력해주세요.');
    return false;
  } else {
    hideErrorMessage(pwdInput);
    return true;
  }
}
//비밀번호 2차 확인
function comparePwd() {
  if (pwdCheck.value === '' || pwdCheck.value !== pwdInput.value) {
    showErrorMessage(pwdCheck, '비밀번호가 일치하지 않습니다.');
    return false;
  } else {
    hideErrorMessage(pwdCheck);
    return true;
  }
}

//로그인버튼 활성화
function turnActiveBtn() {
  //회원가입 페이지인지 확인(맞다면 true, 아니라면 false)
  const signupPage = document.querySelector('.login.new') !== null;
  //각 체크 함수들이 true일 때 담을 변수 생성
  const emailState =
    !emailInput.classList.contains('input-wrong') && emailInput.value !== '';
  const pwdState =
    !pwdInput.classList.contains('input-wrong') && pwdInput.value !== '';
  const nicknameState =
    nicknameInput &&
    !nicknameInput.classList.contains('input-wrong') &&
    nicknameInput.value !== '';
  const checkpwdState =
    pwdCheck &&
    !pwdCheck.classList.contains('input-wrong') &&
    pwdCheck.value !== '';

  //회원가입 페이지라면 이메일,닉네임,비밀번호,비밀번호 확인 함수가 모두 참일 때 실행
  if (signupPage) {
    if (emailState && nicknameState && pwdState && checkpwdState) {
      loginBtn.classList.add('active');
    } else {
      loginBtn.classList.remove('active');
    }
  }
  //회원가입 페이지가 아니라면(로그인 페이지라면) 이메일,비밀번호 확인 함수가 모두 참일 때 실행
  else {
    if (emailState && pwdState) {
      loginBtn.classList.add('active');
    } else {
      loginBtn.classList.remove('active');
    }
  }
}

//이벤트 리스너 (로그인 페이지, 회원가입 페이지 공통)
emailInput.addEventListener('focusout', () => {
  checkEmail();
  turnActiveBtn();
});
pwdInput.addEventListener('focusout', () => {
  checkPwd();
  turnActiveBtn();
});

//로그인 페이지에서 오류 발생하지 않게 pwdCheck가 있을 때만 실행(회원가입 페이지에서만 진행)
if (pwdCheck) {
  pwdCheck.addEventListener('focusout', () => {
    comparePwd();
    turnActiveBtn();
  });
}
//로그인 페이지에서 오류 발생하지 않게 nicknameInput 있을 때만 실행(회원가입 페이지에서만 진행)
if (nicknameInput) {
  nicknameInput.addEventListener('focusout', () => {
    checkNickname();
    turnActiveBtn();
  });
}
