// 이메일 형식 확인
export function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email.trim());
}

// 닉네임 입력 확인
export function validateNickname(nickname) {
  return nickname.trim().length > 0;
}

// 비밀번호 최소 8자 확인
export function validatePassword(password) {
  return password.trim().length >= 8;
}

// 비밀번호 확인 일치 여부
export function validatePasswordConfirm(password, confirm) {
  return password.trim() === confirm.trim();
}

// 로그인/회원가입 유효성 검사
export function validateAuthForm(form, mode = "login") {
  const {
    email = "",
    nickname = "",
    password = "",
    passwordConfirm = "",
  } = form;
  const errors = {};

  if (!email.trim()) {
    errors.email = "이메일을 입력해 주세요";
  } else if (!validateEmail(email)) {
    errors.email = "잘못된 이메일 형식입니다";
  }

  if (mode === "signup" && !nickname.trim()) {
    errors.nickname = "닉네임을 입력해 주세요";
  }

  if (!password.trim()) {
    errors.password = "비밀번호를 입력해 주세요";
  } else if (!validatePassword(password)) {
    errors.password = "비밀번호는 8자 이상 입력해 주세요";
  }

  if (mode === "signup") {
    if (!passwordConfirm.trim()) {
      errors.passwordConfirm = "비밀번호를 다시 입력해 주세요";
    } else if (!validatePasswordConfirm(password, passwordConfirm)) {
      errors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    }
  }

  let isFormValid = true;
  if (
    errors.email ||
    errors.nickname ||
    errors.password ||
    errors.passwordConfirm
  ) {
    isFormValid = false;
  }

  return { errors, isFormValid };
}
