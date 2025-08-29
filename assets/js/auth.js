// 이메일 유효성 검사 정규식
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.addEventListener('DOMContentLoaded', function() {
    // 로그인 페이지 로직
    if (document.getElementById('loginForm')) {
        initLoginPage();
    }
    
    // 회원가입 페이지 로직
    if (document.getElementById('signupForm')) {
        initSignupPage();
    }
    
    // 비밀번호 토글 기능
    initPasswordToggle();
});

// 로그인 페이지 초기화
function initLoginPage() {
    const emailInput = document.getElementById('user-email');
    const passwordInput = document.getElementById('user-password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loginButton = document.querySelector('.login-button');
    const loginForm = document.getElementById('loginForm');
    
    // 이메일 blur 이벤트
    emailInput.addEventListener('blur', function() {
        validateLoginEmail();
    });
    
    // 비밀번호 blur 이벤트
    passwordInput.addEventListener('blur', function() {
        validateLoginPassword();
    });
    
    // input 이벤트로 실시간 버튼 상태 업데이트
    emailInput.addEventListener('input', updateLoginButton);
    passwordInput.addEventListener('input', updateLoginButton);
    
    // 이메일 유효성 검사
    function validateLoginEmail() {
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            showError(emailInput, emailError, '이메일을 입력해주세요.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, '잘못된 이메일 형식입니다');
            return false;
        } else {
            clearError(emailInput, emailError);
            return true;
        }
    }
    
    // 비밀번호 유효성 검사
    function validateLoginPassword() {
        const passwordValue = passwordInput.value;
        
        if (passwordValue === '') {
            showError(passwordInput, passwordError, '비밀번호를 입력해주세요.');
            return false;
        } else if (passwordValue.length < 8) {
            showError(passwordInput, passwordError, '비밀번호를 8자 이상 입력해주세요.');
            return false;
        } else {
            clearError(passwordInput, passwordError);
            return true;
        }
    }
    
    // 로그인 버튼 상태 업데이트
    function updateLoginButton() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;
        const hasEmailError = emailError.textContent !== '';
        const hasPasswordError = passwordError.textContent !== '';
        
        if (emailValue !== '' && passwordValue !== '' && !hasEmailError && !hasPasswordError) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }
    
    // 폼 제출 이벤트
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isEmailValid = validateLoginEmail();
        const isPasswordValid = validateLoginPassword();
        
        if (isEmailValid && isPasswordValid && !loginButton.disabled) {
            // /items 페이지로 이동
            window.location.href = '../page/items.html';
        }
    });
}

// 회원가입 페이지 초기화
function initSignupPage() {
    const emailInput = document.getElementById('user-email');
    const nicknameInput = document.getElementById('user-nickname');
    const passwordInput = document.getElementById('password');
    const passwordRepeatInput = document.getElementById('password-repeat');
    const emailError = document.getElementById('email-error');
    const nicknameError = document.getElementById('nickname-error');
    const passwordError = document.getElementById('password-error');
    const passwordRepeatError = document.getElementById('password-repeat-error');
    const signupButton = document.querySelector('.signup-button');
    const signupForm = document.getElementById('signupForm');
    
    // 각 입력 필드의 blur 이벤트
    emailInput.addEventListener('blur', validateSignupEmail);
    nicknameInput.addEventListener('blur', validateNickname);
    passwordInput.addEventListener('blur', function() {
        validateSignupPassword();
        validatePasswordRepeat(); // 비밀번호가 변경되면 비밀번호 확인도 재검사
    });
    passwordRepeatInput.addEventListener('blur', validatePasswordRepeat);
    
    // input 이벤트로 실시간 버튼 상태 업데이트
    emailInput.addEventListener('input', updateSignupButton);
    nicknameInput.addEventListener('input', updateSignupButton);
    passwordInput.addEventListener('input', function() {
        updateSignupButton();
        // 비밀번호가 입력되는 동안 비밀번호 확인 필드도 실시간 검증
        if (passwordRepeatInput.value !== '') {
            validatePasswordRepeat();
        }
    });
    passwordRepeatInput.addEventListener('input', function() {
        validatePasswordRepeat();
        updateSignupButton();
    });
    
    // 이메일 유효성 검사
    function validateSignupEmail() {
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            showError(emailInput, emailError, '이메일을 입력해주세요.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, '잘못된 이메일 형식입니다');
            return false;
        } else {
            clearError(emailInput, emailError);
            return true;
        }
    }
    
    // 닉네임 유효성 검사
    function validateNickname() {
        const nicknameValue = nicknameInput.value.trim();
        
        if (nicknameValue === '') {
            showError(nicknameInput, nicknameError, '닉네임을 입력해주세요.');
            return false;
        } else {
            clearError(nicknameInput, nicknameError);
            return true;
        }
    }
    
    // 비밀번호 유효성 검사
    function validateSignupPassword() {
        const passwordValue = passwordInput.value;
        
        if (passwordValue === '') {
            showError(passwordInput, passwordError, '비밀번호를 입력해주세요.');
            return false;
        } else if (passwordValue.length < 8) {
            showError(passwordInput, passwordError, '비밀번호를 8자 이상 입력해주세요.');
            return false;
        } else {
            clearError(passwordInput, passwordError);
            return true;
        }
    }
    
    // 비밀번호 확인 유효성 검사
    function validatePasswordRepeat() {
        const passwordValue = passwordInput.value;
        const passwordRepeatValue = passwordRepeatInput.value;
        
        if (passwordRepeatValue === '') {
            clearError(passwordRepeatInput, passwordRepeatError);
            return passwordRepeatValue === ''; // 빈 값일 때는 에러 표시 안함
        } else if (passwordValue !== passwordRepeatValue) {
            showError(passwordRepeatInput, passwordRepeatError, '비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            clearError(passwordRepeatInput, passwordRepeatError);
            return true;
        }
    }
    
    // 회원가입 버튼 상태 업데이트
    function updateSignupButton() {
        const emailValue = emailInput.value.trim();
        const nicknameValue = nicknameInput.value.trim();
        const passwordValue = passwordInput.value;
        const passwordRepeatValue = passwordRepeatInput.value;
        
        const hasEmailError = emailError.textContent !== '';
        const hasNicknameError = nicknameError.textContent !== '';
        const hasPasswordError = passwordError.textContent !== '';
        const hasPasswordRepeatError = passwordRepeatError.textContent !== '';
        
        const allFieldsFilled = emailValue !== '' && nicknameValue !== '' && 
                               passwordValue !== '' && passwordRepeatValue !== '';
        const noErrors = !hasEmailError && !hasNicknameError && 
                        !hasPasswordError && !hasPasswordRepeatError;
        
        if (allFieldsFilled && noErrors) {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
    }
    
    // 폼 제출 이벤트
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isEmailValid = validateSignupEmail();
        const isNicknameValid = validateNickname();
        const isPasswordValid = validateSignupPassword();
        const isPasswordRepeatValid = validatePasswordRepeat();
        
        if (isEmailValid && isNicknameValid && isPasswordValid && 
            isPasswordRepeatValid && !signupButton.disabled) {
            // 로그인 페이지로 이동
            window.location.href = '../page/login.html';
        }
    });
}

function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
}

// 에러 메시지 제거 함수
function clearError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = '';
}

// 비밀번호 토글 기능 초기화
function initPasswordToggle() {
    // 로그인 페이지의 비밀번호 토글
    const passwordToggle = document.getElementById('passwordToggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', function() {
            const passwordInput = document.getElementById('user-password');
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    // 회원가입 페이지의 비밀번호 토글들
    const passwordToggle1 = document.getElementById('passwordToggle1');
    const passwordToggle2 = document.getElementById('passwordToggle2');
    
    if (passwordToggle1) {
        passwordToggle1.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    if (passwordToggle2) {
        passwordToggle2.addEventListener('click', function() {
            const passwordRepeatInput = document.getElementById('password-repeat');
            togglePasswordVisibility(passwordRepeatInput, this);
        });
    }
}

// 비밀번호 가시성 토글 함수
function togglePasswordVisibility(inputElement, toggleButton) {
    if (inputElement.type === 'password') {
        inputElement.type = 'text';
        toggleButton.setAttribute('aria-label', '비밀번호 숨기기');
    } else {
        inputElement.type = 'password';
        toggleButton.setAttribute('aria-label', '비밀번호 보이기');
    }
}