$(document).ready(function(){

    

    $('.security').click(function(){
    $(this).addClass('active');
    $('.public').addClass('active');
    $('#password').attr('type', 'text');
});

    $('.public').click(function(){
    $(this).removeClass('active');
    $('.security').removeClass('active');
    $('#password').attr('type', 'password');
});

    $('.security_check').click(function(){
    $(this).addClass('active');
    $('.public_check').addClass('active');
    $('#password_check').attr('type', 'text');
});

    $('.public_check').click(function(){
    $(this).removeClass('active');
    $('.security_check').removeClass('active');
    $('#password_check').attr('type', 'password');
});

});

const emailInput = document.querySelector('#email');
const emailErr = document.querySelector('#email-err');
const passwordInput = document.querySelector('#password');
const passwordErr = document.querySelector('#password-err');
const nickInput = document.querySelector('#nickname');
const nickErr = document.querySelector('#nick-err');
const passwordCheckInput = document.querySelector('#password_check')
const passwordCheckErr = document.querySelector('#password-check-err')
const signUpBtn =  document.querySelector('.signup_box')


function checkForm(e){
    const target = e.target;
    const idValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const nickValue = nickInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(target === emailInput){
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
    }
    
    if(target === passwordInput){
        if(passwordValue === ''){
        passwordInput.classList.add('err');
        passwordErr.textContent = '비밀번호를 입력해주세요.';
    }else if(passwordValue.length < 8){
        passwordInput.classList.add('err');
        passwordErr.textContent = '비밀번호를 8자 이상 입력해주세요.';
    }else{
        passwordInput.classList.remove('err');
        passwordErr.textContent = '';
    }
    }
    
    if(target === nickInput){
        if(nickValue === ''){
        nickInput.classList.add('err')
        nickErr.textContent = '닉네임을 입력해주세요.';
    }else{
        nickInput.classList.remove('err');
        nickErr.textContent = '';
    }
    }

    if(passwordValue !== passwordCheckValue){
        passwordCheckInput.classList.add('err');
        passwordCheckErr.textContent = '비밀번호가 일치하지 않습니다';
    }else{
        passwordCheckInput.classList.remove('err');
        passwordCheckErr.textContent = '';
    }
   
    if(emailPattern.test(idValue) && passwordValue.length >= 8 && nickValue !== '' && passwordValue == passwordCheckValue){
        signUpBtn.disabled = false;
        signUpBtn.classList.add('active');
    }else{
        signUpBtn.disabled = true;
        signUpBtn.classList.remove('active');
    }

    
}

emailInput.addEventListener('blur', checkForm);
passwordInput.addEventListener('blur', checkForm);
emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);
nickInput.addEventListener('blur', checkForm);
passwordCheckInput.addEventListener('blur', checkForm);
nickInput.addEventListener('input', checkForm);           
passwordCheckInput.addEventListener('input', checkForm);