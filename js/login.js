const passwordWraps = document.querySelectorAll('.password-wrap');

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