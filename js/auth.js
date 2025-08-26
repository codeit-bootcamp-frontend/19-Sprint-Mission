import { EMAIL_REGEX, PASSWORD_MIN_LEN, NICKNAME_REGEX } from '../constants/regex.js'

// 폼 검증 함수
const isRequired = (value, fieldName) => {
  return value.length === 0 ? `${fieldName} 입력해주세요.` : ''
}

const validateEmail = (value) => {
  return EMAIL_REGEX.test(value) ? '' : '잘못된 이메일 형식입니다.'
}

const validatePassword = (value) => {
  return value.length >= PASSWORD_MIN_LEN ? '' : `비밀번호를 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`
}

const validateNickname = (value) => {
  return NICKNAME_REGEX.test(value) ? '' : '잘못된 닉네임 형식입니다.'
}

const validateConfirmPassword = (value) => {
  const passwordInput = document.querySelector('input[name="password"]')
  if (!passwordInput) return ''
  return value === passwordInput.value ? '' : '비밀번호가 일치하지 않습니다.'
}

// 에러 메세지 관리
const showErrorMsg = (input, message) => {
  input.classList.add('auth-input-error')

  const errorSpan = input.closest('.auth-input-area').querySelector('.auth-input-errorMsg')

  if (errorSpan) {
    errorSpan.classList.remove('none')
    errorSpan.textContent = message
  }
}

const clearErrorMsg = (input) => {
  input.classList.remove('auth-input-error')
  input.classList.add('auth-input-complete')

  const errorSpan = input.closest('.auth-input-area').querySelector('.auth-input-errorMsg')
  if (errorSpan) {
    errorSpan.classList.add('none')
    errorSpan.textContent = ''
  }
}

// 인풋 에러 메세지 관리
const validators = {
  email: (value) => isRequired(value, '이메일을') || validateEmail(value),
  password: (value) => isRequired(value, '비밀번호를') || validatePassword(value),
  confirmPassword: (value) => isRequired(value, '비밀번호를') || validateConfirmPassword(value),
  nickname: (value) => isRequired(value, '닉네임을') || validateNickname(value),
}

export const handleInputValidation = (e) => {
  if (e.target.tagName !== 'INPUT') return

  const { name, value } = e.target
  const errorMsg = validators[name] ? validators[name](value) : ''
  errorMsg ? showErrorMsg(e.target, errorMsg) : clearErrorMsg(e.target)
}

// 폼 유효 검증
export const updateFormValidity = (form) => {
  const inputs = form.querySelectorAll('.auth-input')
  let isValid = true

  inputs.forEach((input) => {
    const errorSpan = input.closest('.auth-input-area').querySelector('.auth-input-errorMsg')
    const noError = errorSpan.classList.contains('none')
    if (!input.value || !noError) {
      isValid = false
    }
  })

  const submitBtn = form.querySelector('button[type="submit"]')
  if (submitBtn) {
    submitBtn.disabled = !isValid
  }

  return isValid
}
