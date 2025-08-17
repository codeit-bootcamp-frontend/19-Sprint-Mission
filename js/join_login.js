
const joinArea = document.querySelector('.join_area');
const passwordVisibilityBtn = document.querySelectorAll('.password_visibility');

function focusoutAction(e){

    // 에러 상태 메시지로 전달
    function errorMsg (msg){
        // input에 빨강색 테투리
        e.target.classList.remove('complete');
        e.target.classList.add('error');

        // 기존에 error 메시지가 있으면 삭제
        if(e.target.parentElement.querySelector('span')){
            e.target.parentElement.querySelector('span').remove();
        }

        // 아래에 이메일을 입력해주세요. 에러메시지
        let span = document.createElement('span');
        span.classList.add('error_text');
        span.textContent = msg;
        e.target.parentElement.append(span);
    }

    // 통과
    function errorComplete(){
        if(e.target.parentElement.querySelector('span')){
            e.target.parentElement.querySelector('span').remove();
        }
        e.target.classList.remove('error');
        e.target.classList.add('complete');
    }
    
    // 이메일
    if(e.target.id === 'join_email'){
        //  이메일에 값이 없을 경우
        if(e.target.value.length == 0){
            errorMsg('이메일을 입력해주세요.');
        }
        // 이메일 형식이 잘못된 경우
        else if(!e.target.checkValidity()){
            errorMsg('잘못된 이메일 형식입니다.');
        } else {
            errorComplete()
        }
    }
    
    // 닉네임
    if(e.target.id === 'nickname'){
        //  닉네임에 값이 없을 경우
        if(e.target.value.length == 0){
            errorMsg('닉네임을 입력해주세요.');
        } else {
            errorComplete()
        }
    }

    // 비밀번호
    if(e.target.id === 'password'){
        // 비밀번호에 값이 없을 경우
        if(e.target.value.length == 0){
            errorMsg('비밀번호를 입력해주세요');
        } 
        // 비밀번호 값이 8자 이하인 경우 
        else if (e.target.value.length < 8){
            errorMsg('비밀번호를 8자 이상 입력해주세요.');
        } else {
            errorComplete();
        }
    }

    // 비밀번호 확인
    if(e.target.id === 'password_confirm'){

        // 비민번호 호출
        const pw = document.getElementById('password'); 
        
        // 비밀번호에 값이 없을 경우
        if(e.target.value.length == 0){
            errorMsg('비밀번호를 입력해주세요');
        } 
        // 비밀번호 값이 8자 이하인 경우 
        else if (e.target.value.length < 8){
            errorMsg('비밀번호를 8자 이상 입력해주세요.');
        } 
        // 비밀번호와 비밀번호 확인의 갑이 일치하지 않을 경우
        else if(pw.value !== e.target.value){
            errorMsg('비밀번호가 일치하지 않습니다..');
        } else {
            errorComplete();
        }
    }

    // 이메일과 비밀번호 모두 통과된 경우 로그인 활성화
    const inpLength = e.target.closest('.input_list').querySelectorAll('input').length;
    if(e.target.closest('.input_list').querySelectorAll('.complete').length == inpLength){

        // button disabled 삭제
        e.target.closest('.input_list').nextElementSibling.removeAttribute('disabled');

        // 이동 가능한 속성 추가
        // 로그인 페이지의 경우
        if(window.location.href.includes('login')){
            e.target.closest('.input_list').nextElementSibling.setAttribute('onclick','location.href="/items.html"');
        } 
        // 회원가입 페이지의 경우
        else if(window.location.href.includes('signup')) {
            e.target.closest('.input_list').nextElementSibling.setAttribute('onclick','location.href="/login.html"');
        }
    } 
    // 로그인 비활성화
    else {
        // button disabled 추가
        e.target.closest('.input_list').nextElementSibling.setAttribute('disabled', 'true');
        // 이동 가능한 속성 제거
        e.target.closest('.input_list').nextElementSibling.removeAttribute('onclick');
    }

}

// 비밀번호 가려짐 여부 체크
function passwordVisibility(e){
    if (e.target.classList.contains('password_visibility')){
        if(!e.target.classList.contains('on')){
            e.target.previousElementSibling.setAttribute('type','text');
            e.target.setAttribute('aria-label','비밀번호 가리기');
        }else {
            e.target.previousElementSibling.setAttribute('type','password');
            e.target.setAttribute('aria-label','비밀번호 확인하기');
        }
        e.target.classList.toggle('on');
    }
}

// 회원가입, 로그인 focus out
joinArea.addEventListener('focusout',focusoutAction);

// 비밀번호 확인하기, 가리기 버튼 클릭
joinArea.addEventListener('click', passwordVisibility);