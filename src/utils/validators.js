import {
  EMAIL_REGEX,
  NICKNAME_REGEX,
  PASSWORD_MIN_LEN,
} from '@/constants/regex';

const isRequired = (value, fieldName) =>
  value.length === 0 ? `${fieldName} 입력해주세요.` : '';

const validateEmail = (value) =>
  EMAIL_REGEX.test(value) ? '' : '잘못된 이메일 형식입니다.';

const validatePassword = (value) =>
  value.length >= PASSWORD_MIN_LEN
    ? ''
    : `비밀번호를 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`;

const validateNickname = (value) =>
  NICKNAME_REGEX.test(value) ? '' : '잘못된 닉네임 형식입니다.';

export const validators = {
  email(value) {
    return isRequired(value, '이메일을') || validateEmail(value);
  },
  password(value) {
    return isRequired(value, '비밀번호를') || validatePassword(value);
  },
  confirmPassword(value, values) {
    return (
      isRequired(value, '비밀번호를') ||
      (value === values.password ? '' : '비밀번호가 일치하지 않습니다.')
    );
  },
  nickname(value) {
    return isRequired(value, '닉네임을') || validateNickname(value);
  },
};
