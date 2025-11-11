const email = document.getElementById('email');
const password = document.getElementById('password');
const login_btn = document.getElementById('loginBtn');
let emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let passwordRegex = /^.{8,}$/;

//notice 메세지 생성 함수
function createContent (text){
    let newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    newParagraph.classList.add('notice');
    return newParagraph;
} 

//이메일 체크 함수
//오류 알림 삭제
function removeExistingNotice(inputEl){
    const existing = inputEl.parentNode.querySelector('.notice');
    if (existing) existing.remove();
}

function emailCheck(){
    removeExistingNotice(this);
    let message;
    if(!this.value){
        message = createContent('이메일을 입력해주세요.')
        this.after(message)
    }else if(!emailRegex.test(this.value)){
        message = createContent('잘못된 이메일 형식입니다')
        this.after(message) 
    }else{
        //변화 없음
    }
    updateButtonState();
}

//비밀번호 체크 함수
function passwordCheck(){
    removeExistingNotice(this);

    let message;
    if(!this.value){
        message = createContent('비밀번호를 입력해주세요.')
        this.after(message)
    }else if(!passwordRegex.test(this.value)){
        message = createContent('비밀번호를 8자 이상 입력해주세요.')
        this.after(message) 
    }else{
        //변화 없음
    }
    updateButtonState();
}
// notice가 있는지 확인
function hasError(inputEl) {
  return Boolean(inputEl.parentNode.querySelector('.notice'));
}

//버튼 활성화 함수
function updateButtonState(){
    const hasEmailError = hasError(email);
    const hasPasswordError = hasError(password);
    const isFilled = email.value && password.value;

    if (isFilled && !hasEmailError && !hasPasswordError) {
        login_btn.disabled = false;
        login_btn.classList.remove('disabled'); 
    } else {
        login_btn.disabled = true;
        login_btn.classList.add('disabled');
    }
}


//이메일 비밀번호 포커스 아웃 시 검증
email.addEventListener("blur", emailCheck);
password.addEventListener("blur", passwordCheck);

email.addEventListener('input', function(){
    removeExistingNotice(this);
    updateButtonState();
})
password.addEventListener('input',function(){
    removeExistingNotice(this);
    updateButtonState();
})
//로그인버튼
login_btn.disabled = true;
login_btn.addEventListener('click',function(e){
    e.preventDefault();
    updateButtonState();
    if (!login_btn.disabled) { 
        window.location.href = 'items.html'; 
    }
})