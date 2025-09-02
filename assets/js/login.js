const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginBtn = document.querySelector(".btn.login");

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

//로그인 버튼 활성화
function loginBtnOn() {
  loginBtn.classList.remove("disabled");
  loginBtn.disabled = false;
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

  //전부 통과하면 로그인 버튼 활성화
  if (passwordInput.classList.contains("success")) {
    loginBtnOn();
  }
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

  //전부 통과하면 로그인 버튼 활성화
  if (emailInput.classList.contains("success")) {
    loginBtnOn();
  }
});

//로그인 버튼 페이지 이동
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (loginBtn.disabled) {
    return;
  }

  location.href = "../../pages/items.html";
});
