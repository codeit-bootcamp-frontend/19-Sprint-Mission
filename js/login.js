const formLogin = document.querySelector("#login-form");
const usrEmail = document.querySelector("#usr-email");
const usrEmailError = document.querySelector("#usr-email-error");
const usrPassword = document.querySelector("#usr-password");
const usrPasswordError = document.querySelector("#usr-password-error");
const btnLogin = document.querySelector("#btn-login");

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

// focusout 이벤트
formLogin.addEventListener("focusout", (e) => {
  if (e.target === usrEmail) usrEmailCheck();
  if (e.target === usrPassword) usrPasswordCheck();
  updateButtonState();
});

// 로그인 버튼 활성 조건
function isEmailValid(v) {
  const value = v.trim();
  if (value === "") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function isPasswordValid(v) {
  return v.length >= 8;
}
function updateButtonState() {
  const ok = isEmailValid(usrEmail.value) && isPasswordValid(usrPassword.value);
  btnLogin.disabled = !ok;
}

// input에 입력 중에도 바뀌는 input이벤트 추가
formLogin.addEventListener("input", () => {
  updateButtonState();
});

// 활성 로그인 버튼 클릭시 페이지 이동 이벤트
btnLogin.addEventListener("click", (e) => {
  e.preventDefault(); // 브라우저 기본 버튼동작 제어 필요
  if (!btnLogin.disabled) location.href = "/items";
});

// 심화 요구사항 : 비밀번호 표시 버튼
const btnVisibility = document.querySelector("#btn-visibility");
btnVisibility.addEventListener("click", () => {
  if (usrPassword.type === "password") {
    usrPassword.type = "text";
    btnVisibility.classList.remove("off");
  } else {
    usrPassword.type = "password";
    btnVisibility.classList.add("off");
  }
});

// 초기 상태 동기화(html에 disabled 안줘도 처음에 한번 판별해줌)
updateButtonState();
