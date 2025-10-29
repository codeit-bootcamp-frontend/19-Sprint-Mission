const rootColors = getComputedStyle(document.documentElement);
const validColor = rootColors.getPropertyValue("--blue");
const invalidColor = rootColors.getPropertyValue("--gray400");

document.querySelectorAll(".validate-form").forEach((form) => {
  const btn = form.querySelector(".btn");

  // 모든 input에 input 이벤트
  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(input);
      updateButtonState(form, btn);
    });
  });

  // focus out 시 현재 input만 검사
  form.addEventListener("focusout", (e) => {
    const input = e.target;
    if (!input.classList.contains("input-box")) return;

    validateInput(input);
  });

  // submit 이벤트
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (updateButtonState(form, btn)) {
      window.location.replace("./items");
    }
  });
});

// 특정 input만 검사
function validateInput(input) {
  const wrapper = input.closest(".input-wrapper");
  const errorMessage = wrapper.querySelector(".error-message");
  let valid = true;

  if (input.type === "email") {
    if (input.value.trim() === "") {
      errorMessage.textContent = "이메일을 입력해주세요.";
      valid = false;
    } else if (!input.value.includes("@")) {
      errorMessage.textContent = "잘못된 이메일 형식입니다.";
      valid = false;
    } else {
      errorMessage.textContent = "";
    }
  }

  if (input.type === "password") {
    if (input.value.trim() === "") {
      errorMessage.textContent = "비밀번호를 입력해주세요.";
      valid = false;
    } else if (input.value.length < 8) {
      errorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
      valid = false;
    } else {
      errorMessage.textContent = "";
    }

    if (input.id === "password2") {
      const password = document.getElementById("password1");
      if (password.value !== input.value) {
        errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
        valid = false;
      }
    }
  }

  if (input.id === "nickname") {
    if (input.value.trim() === "") {
      errorMessage.textContent = "닉네임을 입력해주세요.";
      valid = false;
    } else {
      errorMessage.textContent = "";
    }
  }

  errorMessage.style.display = valid ? "none" : "block";
  return valid;
}

// 버튼 상태만 판단
function updateButtonState(form, btn) {
  let isFormValid = true;

  form.querySelectorAll("input").forEach((input) => {
    if (!isInputValid(input)) {
      isFormValid = false;
    }
  });

  btn.disabled = !isFormValid;
  btn.style.backgroundColor = isFormValid ? validColor : invalidColor;
  return isFormValid;
}

// 버튼 활성화용 input 검사
function isInputValid(input) {
  if (input.type === "email") {
    return input.value.trim() !== "" && input.value.includes("@");
  }
  if (input.type === "password") {
    if (input.value.trim() === "" || input.value.length < 8) return false;
    if (input.id === "password2") {
      const password = document.getElementById("password1");
      return password.value === input.value;
    }
    return true;
  }
  if (input.id === "nickname") {
    return input.value.trim() !== "";
  }
  return true;
}
