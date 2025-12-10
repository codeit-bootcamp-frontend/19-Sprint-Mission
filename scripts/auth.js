document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("passwordConfirmation");
  const submitButton = document.querySelector("button[type='submit']");
  const form = document.querySelector("form");
  const togglePasswordIcon = document.querySelectorAll(".toggle-password");

  // 에러 메시지 생성 함수
  function showError(input, message) {
    removeError(input);

    input.classList.add("input-error");

    const error = document.createElement("p");
    error.className = "error-message";
    error.innerText = message;

    input.closest(".input-item").appendChild(error);
  }

  // 에러 제거
  function removeError(input) {
    input.classList.remove("input-error");
    const parent = input.closest(".input-item");
    const existed = parent.querySelector(".error-message");
    if (existed) existed.remove();
  }

  // 이메일 정규식 검사
  function isValidEmail(value) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(value);
  }

  function isValidPassword(passwordvalue) {
    const preg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return preg.test(passwordvalue);
  }

  // 전체 폼 유효성 검사(버튼 활성화 여부)
  function validateForm() {
    const hasError = document.querySelector(".error-message") !== null;

    const allFilled =
      emailInput.value.trim() &&
      nicknameInput.value.trim() &&
      passwordInput.value.trim() &&
      passwordConfirmInput.value.trim();

    submitButton.disabled = !(allFilled && !hasError);

    submitButton.classList.toggle("disabled", submitButton.disabled);
  }

  // 개별 input 이벤트 -------------------------------
  emailInput.addEventListener("focusout", () => {
    removeError(emailInput);

    if (!emailInput.value.trim()) {
      showError(emailInput, "이메일을 입력해주세요.");
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "잘못된 이메일 형식입니다.");
    }

    validateForm();
  });

  nicknameInput.addEventListener("focusout", () => {
    removeError(nicknameInput);

    if (!nicknameInput.value.trim()) {
      showError(nicknameInput, "닉네임을 입력해주세요.");
    }

    validateForm();
  });

  passwordInput.addEventListener("focusout", () => {
    removeError(passwordInput);

    const password = passwordInput.value.trim();

    if (!password) {
      showError(passwordInput, "비밀번호를 입력해주세요.");
    } else if (!isValidPassword(password)) {
      showError(
        passwordInput, 
        "비밀번호를 8자 이상, 영문,숫자,특수문자를 포함해야합니다.");
    }

    validateForm();
  });

  passwordConfirmInput.addEventListener("focusout", () => {
    removeError(passwordConfirmInput);

    if (passwordConfirmInput.value !== passwordInput.value) {
      showError(passwordConfirmInput, "비밀번호가 일치하지 않습니다.");
    }

    validateForm();
  });

  // 입력할 때마다 버튼 활성화 체크
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  // 버튼 눌렀을 때 → 로그인 페이지 이동
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 실제 submit 막기
    if (!submitButton.disabled) {
      window.location.href = "signin.html";
    }
  });
  togglePasswordIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      const inputWrapper = icon.closest(".input-wrapper");
      const passwordInput = inputWrapper.querySelector("input");

      togglePasswordVisibility(passwordInput, icon);
    });
  });
  function togglePasswordVisibility(input, icon) {
    const currentType = input.getAttribute("type");
    const newType = currentType === "password" ? "text" : "password";
    input.setAttribute("type", newType);

    if (newType === "password") {
      icon.src = "images/icons/eye-invisible.svg";
      icon.alt = "비밀번호 숨김";
    } else {
      icon.src = "images/icons/eye-visible.svg";
      icon.alt = "비밀번호 표시";
    }
  }
});
