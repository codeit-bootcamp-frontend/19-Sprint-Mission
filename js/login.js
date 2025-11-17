// 비밀번호 인풋
const togglePW = (inputId, btnId) => {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);

  if (!input || !btn) return;

  btn.addEventListener("click", () => {
    const isPW = input.type === "password";
    input.type = isPW ? "text" : "password";

    if (isPW) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

togglePW("iptPw", "btnPwToggle");
togglePW("iptPwConfirm", "btnPwConfirmToggle");
