// 메세지 상수
const Msg = Object.freeze({
    email: {
        required: "이메일을 입력해주세요.",
        invalid: "잘못된 이메일 형식입니다."
    },
    nickname: {
        required: "닉네임을 입력해주세요."
    },
    password: {
        required: "비밀번호를 입력해주세요.",
        invalid: "비밀번호를 8자 이상 입력해주세요."
    },
    confirm: {
        invalid: "비밀번호가 일치하지 않습니다."
    }
});

// 아이콘 상수
const Icons = {
    visible: "../images/ic_visibility_on.png",
    invisible: "../images/ic_visibility_off.png"
};

// 공통 유틸
function showError(field, msg) {
    field.error.textContent = msg;
    field.input.classList.add("error");
    return false;
}

function clearError(field) {
    field.error.textContent = "";
    field.input.classList.remove("error");
    return true;
}

// 필드 정의
const fields = {
    email: {
        input: document.getElementById("email"),
        error: document.getElementById("email-error"),
    },
    nickname: document.getElementById("nickname") ? { 
        input: document.getElementById("nickname"),
        error: document.getElementById("nickname-error")
    }: null,
    password: {
        input: document.getElementById("password"),
        error: document.getElementById("password-error"),
        toggle: document.getElementById("toggle-password")
    },
    confirm: document.getElementById("confirm-password") ? {
        input: document.getElementById("confirm-password"),
        error: document.getElementById("confirm-password-error"),
        toggle: document.getElementById("toggle-confirm")
    }: null
}

const { email, nickname, password, confirm } = fields;
const submitBtn = document.getElementById("submit-btn");

// 유효성 검증 함수
function validateField(field, checks = []) {
    if(!field) return true;

    const v = field.input.value.trim();
    for(let check of checks) {
        if(check(v))
            return showError(field, check(v));
    }
    return clearError(field);
}

const validateEmail = () => // validateField의 공통 로직을 사용하며 email관련 인자를 전달하는 화살표함수
    validateField(email, [
        v => !v ? Msg.email.required : null,
        v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? Msg.email.invalid : null
    ]);

const validateNickname = () => 
    validateField(nickname, [
        v => !v ? Msg.nickname.required : null
    ]);

const validatePassword = () => 
    validateField(password, [
        v => !v ? Msg.password.required : null,
        v => v.length < 8 ? Msg.password.invalid : null
    ]);

const validateConfirm = () => 
    validateField(confirm, [
        v => password.input.value.trim() !== v ? Msg.confirm.invalid : null
    ]);


// 로그인 버튼 활성화
function toggleSubmitButton() {
    if(validateEmail() && validateNickname() && validatePassword() && validateConfirm()) {
        submitBtn.disabled = false;
        submitBtn.classList.add("enabled");
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove("enabled");
    }
}

// 이벤트 등록
function addFieldEvents(field, validator) {
    if(!field) return;

    field.input.addEventListener("input", toggleSubmitButton());
    field.input.addEventListener("focusout", () => {
        validator();
        toggleSubmitButton();
    });
}
addFieldEvents(email, validateEmail);
addFieldEvents(nickname, validateNickname);
addFieldEvents(password, validatePassword);
addFieldEvents(confirm, validateConfirm);

// visible 토글
function setVisibleToggle(toggleId, field) {
    if(!toggleId || !field) return;

    toggleId.addEventListener("click", () => {
        field.input.type = field.input.type === "password" ? "text" : "password";
        toggleId.src = field.input.type === "password" ? Icons.invisible : Icons.visible;
    });
}
setVisibleToggle(password.toggle, password);
if(confirm) setVisibleToggle(confirm.toggle, confirm);


// 로그인/회원가입 버튼
submitBtn.addEventListener("click", (e)=> {
    e.preventDefault(); // form 제출 정지
    if(submitBtn.disabled) return;

    window.location.href = window.location.pathname.includes("/login") ? "/items" : "/login";
    
});