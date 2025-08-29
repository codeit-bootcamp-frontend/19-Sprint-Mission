// auth.js
// - 로그인 및 회원가입 페이지에서 공통으로 사용하는 자바스크립트 파일
// - form 유효성 검증, 비밀번호 표시 토글 기능 등을 담당
document.addEventListener("DOMContentLoaded", function() {

  // 유효성 검증 상태를 추적하는 변수들
  // - 각 입력 필드의 유효성 상태를 boolean 값으로 관리
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmationValid = false;

  // DOM 요소 선택
  // - ID 선택자를 사용하여 각 입력 필드와 폼 요소를 변수에 할당
  const loginForm = document.getElementById("login_form");
  const signupForm = document.getElementById("signup_form");
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById("confirm_password");
  const submitButton = document.querySelector(
    '.auth_container form button[type="submit"]'
  );

  // 페이지 로드 시 제출 버튼의 비활성화 상태를 설정
  updateSubmitButtonState();

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      window.location.href = "index.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "signup.html";
    });
  }

  function showError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.style.display = "block";
    }
    if (input) {
      input.style.border = "1px solid #f74747";
    }
  }

  function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
    errorElement.style.display = "none";
    }
    if (input) {
      input.style.border = "none";
    }
  }

  // 이메일 정규식으로 검증
  // - 이메일 형식이 올바른지 확인하는 함수
  // - 정규 표현식을 사용하여 이메일 패턴 매칭
  // - 이메일 형식이 올바르면 true, 아니면 false 반환
  //  (참고: 완벽한 이메일 검증은 불가능하며, 여기서는 일반적인 형식만 검사)
  function validateEmail(email) {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailReg.test(email);
  }

  // 이메일 필드의 유효성 검사
  function checkEmailValidity() {
    const emailValue = emailInput.value.trim();
    // 입력값이 없거나 형식이 올바르지 않으면 false, 둘 다 통과하면 true
    // trim() 메서드는 문자열의 앞뒤 공백을 제거

    isEmailValid = false;
    // 기존 오류 메세지 숨기기
    hideError(emailInput, "emailEmptyError");
    hideError(emailInput, "emailInvalidError");

    if (!emailValue) {
      showError(emailInput, "emailEmptyError");
    } else if (!validateEmail(emailValue)) {
      showError(emailInput, "emailInvalidError");
    } else {
      isEmailValid = true;
      hideError(emailInput, "emailEmptyError");
      hideError(emailInput, "emailInvalidError");
    }
    //어느 순서로 오류가 발생하든, 마지막에 isEmailValid 상태에 따라 제출 버튼 활성화 여부를 업데이트
    updateSubmitButtonState();
  }

  // 닉네임 필드의 유효성 검사
  function checkNicknameValidity() {
    const nicknameValue = nicknameInput.value.trim();
    isNicknameValid = false;
    hideError(nicknameInput, "nicknameEmptyError");

    if (!nicknameValue) {
      showError(nicknameInput, "nicknameEmptyError");
    } else {
      isNicknameValid = true;
      hideError(nicknameInput, "nicknameEmptyError");
    }
    updateSubmitButtonState();
  }

  // 비밀번호 필드의 유효성 검사
  function checkPasswordValidity() {
    const passwordValue = passwordInput.value.trim();
    isPasswordValid = false;

    hideError(passwordInput, "passwordEmptyError");
    hideError(passwordInput, "passwordInvalidError");

    if (!passwordValue) {
      showError(passwordInput, "passwordEmptyError");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, "passwordInvalidError");
    } else {
      isPasswordValid = true;
      hideError(passwordInput, "passwordEmptyError");
      hideError(passwordInput, "passwordInvalidError");
    }
    updateSubmitButtonState();

    if (signupForm) {
      // 비밀번호가 변경될 때마다 비밀번호 확인 필드의 유효성도 재검사
      // - 사용자가 비밀번호를 수정한 후에 비밀번호 확인 필드가 이전 비밀번호와 일치하는지 확인하기 위해
      // - 비밀번호 확인 필드의 유효성 검사를 호출하여 즉각적인 피드백 제공
      checkPasswordConfirmationValidity();
    }
  }

  // 비밀번호 확인 필드의 유효성 검사
  function checkPasswordConfirmationValidity() {
    const passwordConfirmationValue = passwordConfirmationInput.value.trim();
    isPasswordConfirmationValid = false;

    hideError(passwordConfirmationInput, "passwordConfirmationError");
    hideError(passwordConfirmationInput, "passwordConfirmationEmptyError");

    if (!isPasswordValid) {
      showError(passwordConfirmationInput, "passwordConfirmationEmptyError");
    } else if (
      !passwordConfirmationValue ||
      passwordConfirmationValue !== passwordInput.value.trim()
      //trim() 메서드를 사용하여 공백을 제거한 후 비교
      // - 사용자가 비밀번호 필드에 공백을 포함한 값을 입력했을 때도 정확히 비교하기 위해
    ) {
      showError(passwordConfirmationInput, "passwordConfirmationError");
    } else {
      isPasswordConfirmationValid = true;
      hideError(passwordConfirmationInput, "passwordConfirmationError");
      hideError(passwordConfirmationInput, "passwordConfirmationEmptyError");
    }
    updateSubmitButtonState();
  }

  function updateSubmitButtonState() {
    let isFormValid = isEmailValid && isPasswordValid;

    if (signupForm) {
      isFormValid = isEmailValid && isNicknameValid && isPasswordConfirmationValid;
    }

    // isFormValid의 값에 따라 선택된 제출 버튼의 disabled와 pointer 속성을 변경
    submitButton.disabled = !isFormValid;
    submitButton.style.cursor = isFormValid ? "pointer" : "not-allowed";
  }

  // 입력 필드에 이벤트 리스너 추가
  if (emailInput) {
    // - 입력 필드 선택 후 focusout 했을 때 각 필드에 해당하는 유효성 검증 함수를 호출
    emailInput.addEventListener("focusout", checkEmailValidity);
  }
  if (nicknameInput) {
    nicknameInput.addEventListener("focusout", checkNicknameValidity);
  }
  if (passwordInput) {
    passwordInput.addEventListener("input", checkPasswordValidity);
  }
  if (passwordConfirmationInput) {
    passwordConfirmationInput.addEventListener("input", checkPasswordConfirmationValidity);
  }

  // toggle 버튼 동작
  function togglePasswordVisibility(event) {
    const button = event.currentTarget;
    const inputField = button.parentElement.querySelector("input");
    const toggleIcon = button.querySelector(".password-toggle-img");

    inputField.classList.toggle("visible");

    // input type 변경
    if (inputField.classList.contains("visible")) {
      inputField.type = "text";
      toggleIcon.src = "images/input/visible_input.svg";
      toggleIcon.alt = "비밀번호 표시";
      button.setAttribute("aria-label", "비밀번호 숨기기");
    } else {
      inputField.type = "password";
      toggleIcon.src = "images/input/invisible_input.svg";
      toggleIcon.alt = "비밀번호 숨기기";
      button.setAttribute("aria-label", "비밀번호 보기");
    }
  }

  const toggleButtons = document.querySelectorAll(".password-toggle-button");
  toggleButtons.forEach((button) =>
    button.addEventListener("click", togglePasswordVisibility)
  );  

});