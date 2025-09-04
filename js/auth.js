document.addEventListener("DOMContentLoaded", () => {
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmationValid = false;

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById(
    "passwordConfirmation"
  );

  // 현재 페이지의 submit 버튼 (로그인/회원가입 각각의 form 안에서 찾음)
  const activeForm = loginForm || signupForm;
  const submitButton = activeForm?.querySelector('button[type="submit"]');

  // 버튼의 기본 배경색 저장
  const DEFAULT_BUTTON_BG = submitButton?.style.backgroundColor || "";

  // 에러 요소 찾기
  function getErrorEl(input) {
    const id = input.getAttribute("aria-describedby");
    return id
      ? document.getElementById(id)
      : input.closest(".input-item")?.querySelector(".error-message");
  }

  // 에러 표시/숨김
  function renderFieldError(input, message) {
    const errorEl = getErrorEl(input);
    if (!errorEl) return;

    if (message) {
      errorEl.textContent = message;
      errorEl.classList.add("is-visible");
      input.classList.add("input--invalid");
      input.setAttribute("aria-invalid", "true");
    } else {
      errorEl.textContent = "";
      errorEl.classList.remove("is-visible");
      input.classList.remove("input--invalid");
      input.removeAttribute("aria-invalid");
    }
  }

  const EMAIL_REGEX = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function validateEmail(value) {
    const v = value.trim();
    if (!v) return "이메일을 입력해 주세요";
    if (!EMAIL_REGEX.test(v)) return "잘못된 이메일입니다";
    return "";
  }

  function validateNickname(value) {
    const v = value.trim();
    if (!v) return "닉네임을 입력해 주세요";
    return "";
  }

  function validatePassword(value) {
    const v = value.trim();
    if (!v) return "비밀번호를 입력해 주세요";
    if (v.length < 8) return "비밀번호를 8자 이상 입력해 주세요";
    return "";
  }

  function validatePasswordConfirmation(passwordValue, confirmValue) {
    const p = passwordValue.trim();
    const c = confirmValue.trim();
    if (!c) return "비밀번호를 다시 한 번 입력해 주세요";
    if (p !== c) return "비밀번호가 일치하지 않습니다";
    return "";
  }

  // submit 버튼 상태는 여기서만 계산
  function updateSubmitButtonState() {
    if (!submitButton) return;

    // 로그인 공통
    const emailErr = emailInput ? validateEmail(emailInput.value) : "";
    const pwdErr = passwordInput ? validatePassword(passwordInput.value) : "";

    let isValid = !emailErr && !pwdErr;

    // 회원가입 추가 항목
    if (signupForm) {
      const nickErr = nicknameInput
        ? validateNickname(nicknameInput.value)
        : "";
      const pwdcErr =
        passwordInput && passwordConfirmationInput
          ? validatePasswordConfirmation(
              passwordInput.value,
              passwordConfirmationInput.value
            )
          : "";
      isValid = isValid && !nickErr && !pwdcErr;
    }

    submitButton.disabled = !isValid;

    // 활성/비활성 시 배경색도 조정
    if (submitButton.disabled) {
      submitButton.style.backgroundColor = "#cccccc";
    } else {
      submitButton.style.backgroundColor = DEFAULT_BUTTON_BG;
    }
  }

  //이벤트 핸들러: Validator 호출 -> View 업데이트 -> 버튼상태 갱신
  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      renderFieldError(emailInput, validateEmail(emailInput.value));
      updateSubmitButtonState();
    });
    emailInput.addEventListener("input", updateSubmitButtonState);
  }

  if (nicknameInput && signupForm) {
    nicknameInput.addEventListener("blur", () => {
      renderFieldError(nicknameInput, validateNickname(nicknameInput.value));
      updateSubmitButtonState();
    });
    nicknameInput.addEventListener("input", updateSubmitButtonState);
  }

  if (passwordInput) {
    passwordInput.addEventListener("blur", () => {
      // focus out 시 validatePassword 호출
      renderFieldError(passwordInput, validatePassword(passwordInput.value));
      updateSubmitButtonState();
    });
    passwordInput.addEventListener("input", () => {
      renderFieldError(passwordInput, validatePassword(passwordInput.value));

      // 비밀번호가 바뀌면 확인값도 다시 검증
      if (passwordConfirmationInput && signupForm) {
        renderFieldError(
          passwordConfirmationInput,
          validatePasswordConfirmation(
            passwordInput.value,
            passwordConfirmationInput.value
          )
        );
      }
      updateSubmitButtonState();
    });
  }

  if (passwordConfirmationInput && signupForm) {
    passwordConfirmationInput.addEventListener("input", () => {
      renderFieldError(
        passwordConfirmationInput,
        validatePasswordConfirmation(
          passwordInput.value,
          passwordConfirmationInput.value
        )
      );
      updateSubmitButtonState();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      window.location.href = "items.html";
    });
  }
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!submitButton.disabled) {
        window.location.href = "login.html"; // 로그인 페이지로 이동
      }
    });
  }

  //비밀번호 표시 토글
  function togglePasswordVisibility(event) {
    const button = event.currentTarget;
    const inputField = button.parentElement.querySelector("input");
    const toggleIcon = button.querySelector(".eyeicon");

    const isVisible = inputField.type === "text";
    inputField.type = isVisible ? "password" : "text";

    toggleIcon.src = isVisible
      ? "/sprint2_img/btn_visibility_on_24px.png" // 숨김(패스워드) 상태 아이콘
      : "/sprint2_img/Vector.png"; // 표시(텍스트) 상태 아이콘
    toggleIcon.alt = isVisible
      ? "비밀번호 숨김 상태 아이콘"
      : "비밀번호 표시 상태 아이콘";

    button.setAttribute(
      "aria-label",
      isVisible ? "비밀번호 보기" : "비밀번호 숨기기"
    );
  }

  document
    .querySelectorAll(".password-toggle-button")
    .forEach((btn) => btn.addEventListener("click", togglePasswordVisibility));

  // 최초 1회 버튼 상태 계산
  updateSubmitButtonState();
});
