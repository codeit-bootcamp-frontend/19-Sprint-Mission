const formSignup = document.querySelector("#signup-form");
const usrEmail = document.querySelector("#usr-email");
const usrEmailError = document.querySelector("#usr-email-error");
const usrName = document.querySelector("#usr-name");
const usrNameError = document.querySelector("#usr-name-error");
const usrPassword = document.querySelector("#usr-password");
const usrPasswordError = document.querySelector("#usr-password-error");
const usrPasswordConfirm = document.querySelector("#usr-password-confirm");
const usrPasswordConfirmError = document.querySelector(
  "#usr-password-confirm-error"
);
const btnSignup = document.querySelector("#btn-signup");

// 이메일 요구사항
function usrEmailCheck() {
  const value = usrEmail.value.trim();
  if (value === "") {
    usrEmail.classList.add("input-error");
    usrEmailError.innerText = "이메일을 입력해주세요.";
    usrEmailError.classList.remove("hidden");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    usrEmail.classList.add("input-error");
    usrEmailError.innerText = "잘못된 이메일 형식입니다.";
    usrEmailError.classList.remove("hidden");
  } else {
    usrEmail.classList.remove("input-error");
    usrEmailError.classList.add("hidden");
  }
}

// 닉네임 요구사항
function usrNameCheck() {
  const value = usrName.value.trim();
  if (value === "") {
    usrName.classList.add("input-error");
    usrNameError.innerText = "닉네임을 입력해주세요.";
    usrNameError.classList.remove("hidden");
  } else {
    usrName.classList.remove("input-error");
    usrNameError.classList.add("hidden");
  }
}

// 비밀번호 요구사항
function usrPasswordCheck() {
  const value = usrPassword.value.trim();
  if (value === "") {
    usrPassword.classList.add("input-error");
    usrPasswordError.innerText = "비밀번호를 입력해주세요.";
    usrPasswordError.classList.remove("hidden");
  } else if (value.length < 8) {
    usrPassword.classList.add("input-error");
    usrPasswordError.innerText = "비밀번호를 8자 이상 입력해주세요.";
    usrPasswordError.classList.remove("hidden");
  } else {
    usrPassword.classList.remove("input-error");
    usrPasswordError.classList.add("hidden");
  }
}

// 비밀번호 확인 요구사항
function usrPasswordConfirmCheck() {
  const forwardValue = usrPassword.value.trim(); // 앞에꺼랑 묶는게 나았을지?
  const value = usrPasswordConfirm.value.trim();
  if (value === "") {
    usrPasswordConfirm.classList.add("input-error");
    usrPasswordConfirmError.innerText = "비밀번호를 입력해주세요.";
    usrPasswordConfirmError.classList.remove("hidden");
  } else if (forwardValue !== value) {
    usrPasswordConfirm.classList.add("input-error");
    usrPasswordConfirmError.innerText = "비밀번호가 일치하지 않습니다.";
    usrPasswordConfirmError.classList.remove("hidden");
  } else {
    usrPasswordConfirm.classList.remove("input-error");
    usrPasswordConfirmError.classList.add("hidden");
  }
}

// focusout 이벤트
formSignup.addEventListener("focusout", (e) => {
  if (e.target === usrEmail) usrEmailCheck();
  if (e.target === usrName) usrNameCheck();
  if (e.target === usrPassword) usrPasswordCheck();
  if (e.target === usrPasswordConfirm)
    usrPasswordConfirmCheck(usrPasswordConfirm.value, usrPassword.value);
  updateButtonState();
});

// 회원가입 버튼 활성 조건
function isEmailValid(v) {
  const value = v.trim();
  if (value === "") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function isNameValid(v) {
  const value = v.trim();
  return value !== "";
}
function isPasswordValid(v) {
  const value = v.trim();
  if (value === "") return false;
  return v.length >= 8;
}
function isPasswordConfirmValid(v, forwardValue) {
  const value = v.trim();
  if (value === "") return false;
  return value === forwardValue.trim();
}
function updateButtonState() {
  const ok =
    isEmailValid(usrEmail.value) &&
    isNameValid(usrName.value) &&
    isPasswordValid(usrPassword.value) &&
    isPasswordConfirmValid(usrPasswordConfirm.value, usrPassword.value);
  btnSignup.disabled = !ok;
}

// input에 입력 중에도 바뀌는 input이벤트 추가
formSignup.addEventListener("input", () => {
  updateButtonState();
});

// 활성 로그인 버튼 클릭시 페이지 이동 이벤트
btnSignup.addEventListener("click", (e) => {
  e.preventDefault(); // 브라우저 기본 버튼동작 제어 필요
  if (!btnSignup.disabled) location.href = "/pages/login.html";
});

// 심화 요구사항 : 비밀번호 표시 버튼(2개라 id로 안하고 class로 적용)
const btnVisibility = document.querySelectorAll(".btn-visibility");
btnVisibility.forEach((btn) => {
  btn.addEventListener("click", function () {
    const wrap = this.closest(".input-inc-btn");
    const input = wrap.querySelector("input");

    if (input.type === "password") {
      input.type = "text";
      this.classList.remove("off");
    } else {
      input.type = "password";
      this.classList.add("off");
    }
  });
});

// 초기 상태 동기화(html에 disabled 안줘도 처음에 한번 판별해줌)
updateButtonState();
