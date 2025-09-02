const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const signupBtn = document.querySelector(".btn.login");
const nickNameInput = document.getElementById("nickname");
const passwordChkInput = document.getElementById("password-check");
const nickNameError = document.getElementById("nickname-error");
const passwordChkError = document.getElementById("passwordChk-error");

//에러 스타일
function showInputError(input, errorElement, message) {
  input.classList.remove("success");
  input.classList.add("error");
  errorElement.textContent = message;
}

//성공 스타일
function showInputSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.textContent = "";
}

//회원가입 버튼 활성화
function signupBtnOn() {
  signupBtn.classList.remove("disabled");
  signupBtn.disabled = false;
}

//이메일 유효성 검사
emailInput.addEventListener("blur", () => {
  if (!emailInput.value) {
    showInputError(emailInput, emailError, "이메일을 입력해주세요.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    showInputError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    return;
  }

  showInputSuccess(emailInput, emailError);
  checkAllValid();
});

//닉네임 유효성 검사
nickNameInput.addEventListener("blur", () => {
  if (!nickNameInput.value) {
    showInputError(nickNameInput, nickNameError, "닉네임을 입력해주세요.");
    return;
  }

  showInputSuccess(nickNameInput, nickNameError);
  checkAllValid();
});

//비밀번호 유효성 검사
passwordInput.addEventListener("blur", () => {
  if (!passwordInput.value) {
    showInputError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    return;
  }

  if (passwordInput.value.length < 8) {
    showInputError(
      passwordInput,
      passwordError,
      "비밀번호를 8자 이상 입력해주세요."
    );
    return;
  }

  showInputSuccess(passwordInput, passwordError);
  checkAllValid();
});

//비밀번호 확인 검사
passwordChkInput.addEventListener("blur", () => {
  if (!passwordChkInput.value) {
    showInputError(
      passwordChkInput,
      passwordChkError,
      "비밀번호가 일치하지 않습니다."
    );
    return;
  }

  if (passwordInput.value !== passwordChkInput.value) {
    showInputError(
      passwordChkInput,
      passwordChkError,
      "비밀번호가 일치하지 않습니다."
    );
    return;
  }

  showInputSuccess(passwordChkInput, passwordChkError);
  checkAllValid();
});

//전부 통과하면 회원가입 버튼 활성화
function checkAllValid() {
  if (
    emailInput.classList.contains("success") &&
    nickNameInput.classList.contains("success") &&
    passwordInput.classList.contains("success") &&
    passwordChkInput.classList.contains("success")
  ) {
    signupBtnOn();
  } else {
    signupBtn.disabled = true;
    signupBtn.classList.add("disabled");
  }
}

//회원가입 버튼 페이지 이동
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (signupBtn.disabled) {
    return;
  }

  location.href = "../../pages/login.html";
});
