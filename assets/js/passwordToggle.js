document.querySelectorAll(".password-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // 클릭한 토글 버튼의 형제 input 찾기
    const passwordInput = toggle.parentElement.querySelector(
      'input[type="password"], input[type="text"]'
    );
    const eyeIcon = toggle.querySelector("img");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src = "../assets/images/eye_open.svg";
    } else {
      passwordInput.type = "password";
      eyeIcon.src = "../assets/images/eye_closed.svg";
    }
  });
});
