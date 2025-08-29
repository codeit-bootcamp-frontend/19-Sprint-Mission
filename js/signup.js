const passwordWraps = document.querySelectorAll('.password-wrap');
const pass = document.getElementById('password');
const passCheck = document.getElementById('password-check');
const Email = document.getElementById('email');
const submitBtn = document.getElementById('submit')
const Name = document.getElementById('name')

passwordWraps.forEach(wrap => {
  const input = wrap.querySelector('input');
  const off = wrap.querySelector('.eye-off');
  const on = wrap.querySelector('.eye-on');

  on.classList.add('test');

  off.addEventListener('click', () => {
    off.classList.add('test');
    on.classList.remove('test');
    input.type = 'text';
  });

  on.addEventListener('click', () => {
    on.classList.add('test');
    off.classList.remove('test');
    input.type = 'password';
  });

});

// 이메일 오류
Email.addEventListener('focusout', () => {
    // 기존 경고 메시지가 있으면 제거
  const oldWarning = Email.nextElementSibling;
  if (oldWarning && oldWarning.classList.contains('warning')) {
    oldWarning.remove();
  }

  const emailValue = Email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {// 값이 없을 때
    Email.insertAdjacentHTML('afterend', `
      <p class="warning">이메일을 입력해주세요</p>
    `);
    Email.classList.add('error');
    submitBtn.disabled = true;
   
  } else if (!emailPattern.test(value)) {// 이메일 형식이 아닐 때
    Email.insertAdjacentHTML('afterend', `
      <p class="warning">잘못된 이메일 형식입니다</p>
    `);
    Email.classList.add('error');
    submitBtn.disabled = true;
  } else {// 정상 입력일떄
   Email.classList.remove('error');
   submitBtn.disabled = false;
  }
});
// 이메일 오류
Name.addEventListener('focusout', () => {
    // 기존 경고 메시지가 있으면 제거
  const oldWarning = Name.nextElementSibling;
  if (oldWarning && oldWarning.classList.contains('warning')) {
    oldWarning.remove();
  }

  const nameValue = Name.value.trim();

  if (nameValue === '') {// 값이 없을 때
    Name.insertAdjacentHTML('afterend', `
      <p class="warning">닉네임을 입력해주세요.</p>
    `);
    Name.classList.add('error');
    submitBtn.disabled = true;
   
  } else {// 정상 입력일떄
   Name.classList.remove('error');
   submitBtn.disabled = false;
  }
});

// 비밀번호 오류
const passwordPairs = [
    { input: pass, on: passwordWraps[0].querySelector('.eye-on'), off: passwordWraps[0].querySelector('.eye-off') },
    { input: passCheck, on: passwordWraps[1].querySelector('.eye-on'), off: passwordWraps[1].querySelector('.eye-off') }
];

function validatePassword(input, onIcon, offIcon) {
    const oldWarning = input.nextElementSibling;
    if (oldWarning && oldWarning.classList.contains('warning')) oldWarning.remove();

    const value = input.value.trim();
    let errorMsg = '';
    
    if (value === '') {
        errorMsg = '비밀번호를 입력해주세요';
    } else if (value.length < 8) {
        errorMsg = '비밀번호를 8자 이상 입력해주세요';
    } else if (input.id === 'password-check' && value !== pass.value.trim()) {
        errorMsg = '비밀번호가 일치하지 않습니다';
    }

    if (errorMsg) {
        input.insertAdjacentHTML('afterend', `<p class="warning">${errorMsg}</p>`);
        input.classList.add('error');
        onIcon.classList.add('change');
        offIcon.classList.add('change');
    } else {
        input.classList.remove('error');
        onIcon.classList.remove('change');
        offIcon.classList.remove('change');
    }
// submit 버튼 상태 결정 값이 ture일시 활성화 false 일시 비활성화
    const allValid = pass.value.trim().length >= 8 &&
                     passCheck.value.trim().length >= 8 &&
                     pass.value.trim() === passCheck.value.trim();
    submitBtn.disabled = !allValid;
}

passwordPairs.forEach(pair => {
    pair.input.addEventListener('focusout', () => {
        validatePassword(pair.input, pair.on, pair.off);
    });
});
