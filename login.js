// 선택// DOM 요소 선택
const emailInput = document.getElementById('user-email');
const passwordInput = document.getElementById('user-pw');
const loginBtn = document.getElementById('login-btn');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
// 상태// 유효성 검사 상태
let isEmailValid = false;
let isPasswordValid = false;
// 정규식// 이메일 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일 유효성 검사
function validateEmail() {
    const email = emailInput.value.trim();

    // 빈 값 체크
    if (email === '') {
        showError(emailInput, emailError, '이메일을 입력해주세요.');
        isEmailValid = false;
        return;
    }

    // 이메일 형식 체크
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, emailError, '잘못된 이메일 형식입니다.');
        isEmailValid = false;
        return;
    }

    // 유효한 경우
    hideError(emailInput, emailError);
    isEmailValid = true;
}

// 비밀번호 유효성 검사
function validatePassword() {
    const password = passwordInput.value;

    // 빈 값 체크
    if (password === '') {
        showError(passwordInput, passwordError, '비밀번호를 입력해주세요.');
        isPasswordValid = false;
        return;
    }

    // 길이 체크
    if (password.length < 8) {
        showError(passwordInput, passwordError, '비밀번호를 8자 이상 입력해주세요.');
        isPasswordValid = false;
        return;
    }

    // 유효한 경우
    hideError(passwordInput, passwordError);
    isPasswordValid = true;
}

// 에러 표시
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    const box = inputElement.closest('.email-box') || inputElement.closest('.pw-box');
    if (box) box.classList.add('error');

    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// 에러 숨김
function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    const box = inputElement.closest('.email-box') || inputElement.closest('.pw-box');
    if (box) box.classList.remove('error');

    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// 로그인 버튼 상태 업데이트
function updateLoginButton() {
    loginBtn.disabled = !(isEmailValid && isPasswordValid);
}

// 이벤트 리스너 등록
emailInput.addEventListener('blur', function () {
    validateEmail();
    updateLoginButton();
});

passwordInput.addEventListener('blur', function () {
    validatePassword();
    updateLoginButton();
});

// 실시간 검사 (선택사항)
emailInput.addEventListener('input', function () {
    if (emailInput.value.trim() !== '') {
        validateEmail();
        updateLoginButton();
    }
});

passwordInput.addEventListener('input', function () {
    if (passwordInput.value !== '') {
        validatePassword();
        updateLoginButton();
    }
});

// 로그인 버튼 클릭
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // 최종 검사
    validateEmail();
    validatePassword();

    if (isEmailValid && isPasswordValid) {
        window.location.href = '/items';
    }
});