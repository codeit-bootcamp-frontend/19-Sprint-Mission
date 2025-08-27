$(document).ready(function(){
    $('.security').click(function(){
        $(this).addClass('active')
        $('.public').addClass('active')
        $('#password').attr('type','text')
    });

    $('.public').click(function(){
        $(this).removeClass('active')
        $('.security').removeClass('active')
        $('#password').attr('type','password')
    });

});

const emailInput = document.querySelector('#email');
const emailErr = document.querySelector('#email-err');
const passwordInput = document.querySelector('#password');
const passwordErr = document.querySelector('#password-err');
const loginBtn = document.querySelector('.login_btn');
function checkForm(){
    const idValue = emailInput.value.trim();
    const passwordValue  = passwordInput.value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(idValue === ''){
        emailInput.classList.add('err');
        emailErr.textContent = '이메일을 입력해주세요.';
    }else if(!emailPattern.test(idValue)){
        emailInput.classList.add('err');
        emailErr.textContent = '잘못된 이메일 형식입니다.';
    }else{
        emailInput.classList.remove('err');
        emailErr.textContent = '';
    }

    
    if(passwordValue === ''){
        passwordInput.classList.add('err');
        passwordErr.textContent = '비밀번호를 입력해주세요';
    }else if(passwordValue.length < 8){
        passwordInput.classList.add('err');
        passwordErr.textContent = '비밀번호를 8자 이상 입력해주세요'
    }else{
        passwordInput.classList.remove('err');
        passwordErr.textContent = '';
    }


    if(emailPattern.test(idValue) && passwordValue.length >= 8){
    loginBtn.disabled = false;
    loginBtn.classList.add('active');
    }else{
    loginBtn.disabled = true;
    loginBtn.classList.remove('active');
}
}

emailInput.addEventListener('blur', checkForm);
passwordInput.addEventListener('blur', checkForm);
emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);









