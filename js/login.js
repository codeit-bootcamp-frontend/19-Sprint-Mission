const passwordWraps = document.querySelectorAll('.password-wrap');
const passOff = document.querySelector('.eye-off')
const passOn = document.querySelector('.eye-on')
const pass = document.querySelector('#password');
const Email = document.querySelector('#email');
const submitBtn = document.getElementById('submit');
// 눈 아이콘 
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
// =======================================================

// 이메일 오류
Email.addEventListener('focusout', () => {
  // 기존 경고 메시지가 있으면 제거
  const oldWarning = Email.nextElementSibling;
  if (oldWarning && oldWarning.classList.contains('warning')) {
    oldWarning.remove();
  }

  const value = Email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === '') {
    // 값이 없을 때
    Email.insertAdjacentHTML('afterend', `
      <p class="warning">이메일을 입력해주세요</p>
    `);
    Email.classList.add('error');
    submitBtn.disabled = true;
   
  } else if (!emailPattern.test(value)) {
    // 이메일 형식이 아닐 때
    Email.insertAdjacentHTML('afterend', `
      <p class="warning">잘못된 이메일 형식입니다</p>
    `);
    Email.classList.add('error');
    submitBtn.disabled = true;
  } else {
    // 정상 입력일 때
   Email.classList.remove('error');
   submitBtn.disabled = false;
  }
});
// =======================================================


// 비밀번호 오류
    pass.addEventListener('blur', () => {
  // 기존 경고 메시지가 있으면 제거
  const oldWarning = pass.nextElementSibling;
  if (oldWarning && oldWarning.classList.contains('warning')) {
    oldWarning.remove();
  }

  const passValue = pass.value.trim();

  if (passValue === '') {
    // 값이 없을 때
    pass.insertAdjacentHTML('afterend', `
      <p class="warning">비밀번호를 입력해주세요.</p>
    `);
    pass.classList.add('error');
    submitBtn.disabled = true;
    passOff.classList.add('change')
    passOn.classList.add('change')
   
  } else if (passValue.length < 8) {
    // 이메일 형식이 아닐 때
    pass.insertAdjacentHTML('afterend', `
      <p class="warning">비밀번호를 8자 이상 입력해주세요.</p>
    `);
    pass.classList.add('error');
    submitBtn.disabled = true;
    passOff.classList.add('change')
    passOn.classList.add('change')
  } else {
    // 정상 입력일 때
   pass.classList.remove('error');
   submitBtn.disabled = false;
  }
});
