const btn = document.querySelector(".password-visibility");
const input = document.querySelector(".password-input");
const icon = btn.querySelector("img");

function visibility_handler (input, icon) {
  if(input.type === 'password'){
    input.type = 'text';
    icon.src = "../image/visibility_on.svg";
  } else {
    input.type = 'password';
    icon.src = "../image/visibility_off.svg";
  }
}

btn.addEventListener('click', () => visibility_handler(input, icon));