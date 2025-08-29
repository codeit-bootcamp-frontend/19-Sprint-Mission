// ✅ DOM 요소 선택
const emailInput = document.getElementById('user-email');
const nicknameInput = document.getElementById('user-nickname');
const passwordInput = document.getElementById('user-pw');
const passwordCheckInput = document.getElementById('user-pw-check');

const submitBtn = document.querySelector('.btn_lg');
const emailError = document.querySelector('.ipt-email .error-message');
const nicknameError = document.querySelector('.ipt-nickname .error-message');
const passwordError = document.querySelector('.ipt-pw .error-message');
const passwordCheckError = document.querySelector('.ipt-pw-check .error-message');

// 비밀번호 토글 요소들
const togglePwBtn = document.querySelector('.toggle-pw');
const toggleCheckPwBtn = document.querySelector('.toggle-check-pw');
const eyeIcon = document.querySelector('.login_eyes');
const eyeOffIcon = document.querySelector('.login_eyes_off');

// 박스 요소들
const pwBox = document.querySelector('.pw-box');
const pwCheckBox = document.querySelector('.pw-check-box');

// ✅ 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ✅ 유효성 상태 변수
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordCheckValid = false;

// ✅ 유틸 함수
function setValidity(input, errorElement, condition, message) {
    if (!condition) {
        showError(input, errorElement, message);
        return false;
    }
    hideError(input, errorElement);
    return true;
}

// ✅ 에러 표시 & 숨김 공통 처리
function showError(inputElement, errorElement, message) {
    // input 에러 클래스 추가
    inputElement.classList.add("error");

    // 부모 박스 에러 클래스 추가 (pw-box, pw-check-box용)
    const parentBox = inputElement.closest('.pw-box') || inputElement.closest('.pw-check-box');
    if (parentBox) {
        parentBox.classList.add("error");
    }

    // 에러 메시지 표시
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add("show");
    }
}

function hideError(inputElement, errorElement) {
    // input 에러 클래스 제거
    inputElement.classList.remove("error");

    // 부모 박스 에러 클래스 제거
    const parentBox = inputElement.closest('.pw-box') || inputElement.closest('.pw-check-box');
    if (parentBox) {
        parentBox.classList.remove("error");
    }

    // 에러 메시지 숨김
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.classList.remove("show");
    }
}

// ✅ 제출 버튼 상태 업데이트
function updateSubmitButton() {
    const allValid = isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;
    submitBtn.disabled = !allValid;
}

// ✅ 이메일 검사
function validateEmail() {
    const email = emailInput.value.trim();
    isEmailValid = setValidity(
        emailInput,
        emailError,
        email !== "" && emailRegex.test(email),
        email === "" ? "이메일을 입력해주세요." : "잘못된 이메일 형식입니다."
    );
    updateSubmitButton();
}

// ✅ 닉네임 검사
function validateNickname() {
    const nickname = nicknameInput.value.trim();
    isNicknameValid = setValidity(
        nicknameInput,
        nicknameError,
        nickname !== "",
        "닉네임을 입력해주세요."
    );
    updateSubmitButton();
}

// ✅ 비밀번호 검사
function validatePassword() {
    const password = passwordInput.value;
    isPasswordValid = setValidity(
        passwordInput,
        passwordError,
        password !== "" && password.length >= 8,
        password === "" ? "비밀번호를 입력해주세요." : "비밀번호를 8자 이상 입력해주세요."
    );

    // 비밀번호가 바뀌면 비밀번호 확인도 재검사
    validatePasswordCheck();
    updateSubmitButton();
}

// ✅ 비밀번호 확인 검사
function validatePasswordCheck() {
    const password = passwordInput.value;
    const passwordCheck = passwordCheckInput.value;

    if (passwordCheck === "") {
        hideError(passwordCheckInput, passwordCheckError);
        isPasswordCheckValid = false;
        updateSubmitButton();
        return;
    }

    if (password !== passwordCheck) {
        showError(passwordCheckInput, passwordCheckError, "비밀번호가 일치하지 않습니다.");
        isPasswordCheckValid = false;
        updateSubmitButton();
        return;
    }

    if (!isPasswordValid) {
        hideError(passwordCheckInput, passwordCheckError);
        isPasswordCheckValid = false;
        updateSubmitButton();
        return;
    }

    hideError(passwordCheckInput, passwordCheckError);
    isPasswordCheckValid = true;
    updateSubmitButton();
}

// ✅ 제출 버튼 상태 업데이트
function updateSubmitButton() {
    const allValid = isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;
    submitBtn.disabled = !allValid;
}

// ✅ 비밀번호 표시/숨김 토글 (공통 함수)
function togglePasswordVisibility(input, iconElement, showIconPath, hideIconPath) {
    const isPassword = input.getAttribute("type") === "password";
    input.setAttribute("type", isPassword ? "text" : "password");
    iconElement.src = isPassword ? showIconPath : hideIconPath;
}

// ✅ 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function () {
    // 입력 필드 이벤트
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);

    nicknameInput.addEventListener('input', validateNickname);
    nicknameInput.addEventListener('blur', validateNickname);

    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    passwordCheckInput.addEventListener('input', validatePasswordCheck);
    passwordCheckInput.addEventListener('blur', validatePasswordCheck);

    // 비밀번호 표시/숨김 토글
    if (togglePwBtn && eyeIcon) {
        togglePwBtn.addEventListener("click", () => {
            togglePasswordVisibility(
                passwordInput,
                eyeIcon,
                "image/btn_visibility_off_24px.png", // 보이는 상태 아이콘
                "image/btn_visibility_on_24px.png"   // 숨겨진 상태 아이콘
            );
        });
    }

    if (toggleCheckPwBtn && eyeOffIcon) {
        toggleCheckPwBtn.addEventListener("click", () => {
            togglePasswordVisibility(
                passwordCheckInput,
                eyeOffIcon,
                "image/btn_visibility_on_24px.png",
                "image/btn_visibility_off_24px.png"
            );
        });
    }

    // 초기 버튼 상태 설정
    updateSubmitButton();

    // 폼 제출 이벤트
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // 모든 필드 검증
        validateEmail();
        validateNickname();
        validatePassword();
        validatePasswordCheck();

        if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid) {
            window.location.href = '/login';
        }
    });
});