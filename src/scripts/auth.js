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
    visible: "images/ic_visibility_on.png",
    invisible: "images/ic_visibility_off.png"
};

// 공통 유틸
export function showError(field, msg) {
    field.error.textContent = msg;
    field.input.classList.add("error");
    return false;
}

export function clearError(field) {
    field.error.textContent = "";
    field.input.classList.remove("error");
    return true;
}




// 로그인 버튼 활성화
export function toggleSubmitButton() {
    if(validateEmail() && validateNickname() && validatePassword() && validateConfirm()) {
        submitBtn.disabled = false;
        submitBtn.classList.add("enabled");
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove("enabled");
    }
}

// 이벤트 등록
export function addFieldEvents(field, validator) {
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
export function setVisibleToggle(toggleId, field) {
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