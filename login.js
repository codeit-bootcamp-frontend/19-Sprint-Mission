document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('user-email');
    const passwordInput = document.getElementById('user-pw');
    const loginBtn = document.getElementById('login-btn');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePwBtn = document.querySelector('.toggle-pw');
    const eyeIcon = document.querySelector('.login_eyes');

    // 빠른 가드(요소 못찾으면 콘솔에 찍음)
    if (!passwordInput) { console.error('user-pw element not found'); return; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailValid = false;
    let isPasswordValid = false;

    function showError(inputElement, errorElement, message) {
        const box = inputElement.closest('.email-box') || inputElement.closest('.pw-box');
        if (box) box.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    function hideError(inputElement, errorElement) {
        const box = inputElement.closest('.email-box') || inputElement.closest('.pw-box');
        if (box) box.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    }

    function validateEmail() {
        if (!emailInput) return;
        const email = emailInput.value.trim();
        if (email === '') {
            showError(emailInput, emailError, '이메일을 입력해주세요.');
            isEmailValid = false; return;
        }
        if (!emailRegex.test(email)) {
            showError(emailInput, emailError, '잘못된 이메일 형식입니다.');
            isEmailValid = false; return;
        }
        hideError(emailInput, emailError);
        isEmailValid = true;
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password === '') {
            showError(passwordInput, passwordError, '비밀번호를 입력해주세요.');
            isPasswordValid = false; return;
        }
        if (password.length < 8) {
            showError(passwordInput, passwordError, '비밀번호를 8자 이상 입력해주세요.');
            isPasswordValid = false; return;
        }
        hideError(passwordInput, passwordError);
        isPasswordValid = true;
    }

    function updateLoginButton() {
        if (!loginBtn) return;
        loginBtn.disabled = !(isEmailValid && isPasswordValid);
    }

    // 이벤트 바인딩
    if (emailInput) {
        emailInput.addEventListener('input', () => { validateEmail(); updateLoginButton(); });
        emailInput.addEventListener('blur', () => { validateEmail(); updateLoginButton(); });
    }
    passwordInput.addEventListener('input', () => { validatePassword(); updateLoginButton(); });
    passwordInput.addEventListener('blur', () => { validatePassword(); updateLoginButton(); });

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            validateEmail();
            validatePassword();
            updateLoginButton();
            if (isEmailValid && isPasswordValid) {
                window.location.href = '/items';
            }
        });
    }

    // === 여기서부터 토글 핵심 ===
    if (togglePwBtn) {
        togglePwBtn.addEventListener('click', (e) => {
            e.preventDefault(); // (안전)
            const nowVisible = passwordInput.type === 'text';
            passwordInput.type = nowVisible ? 'password' : 'text';

            // 아이콘 교체 (파일명이 맞는지 확인)
            if (eyeIcon) {
                const onPath = 'image/btn_visibility_on_24px.png';
                const offPath = 'image/btn_visibility_off_24px.png';
                eyeIcon.src = nowVisible ? onPath : offPath;
                eyeIcon.alt = nowVisible ? '비밀번호 표시' : '비밀번호 숨김';
            }
            togglePwBtn.setAttribute('aria-pressed', String(!nowVisible));

            // 포커스 유지 (타이핑 계속할 수 있게)
            passwordInput.focus();
        });
    } else {
        console.warn('toggle button(.toggle-pw) not found in DOM.');
    }

    // 디버그 헬퍼 (개발자도구에서 window.__loginDebug() 호출)
    window.__loginDebug = () => console.log({
        togglePwBtn: !!togglePwBtn,
        eyeIcon: !!eyeIcon,
        passwordInput: !!passwordInput
    });
});