const validations = {
  join_email: [
    {
      validation: (value) => value.length > 0,
      errorMsg: "이메일을 입력해주세요.",
    },
    {
      validation: (value) => /\S+@\S+\.\S+/.test(value),
      errorMsg: "잘못된 이메일 형식입니다.",
    },
  ],
  nickname: [
    {
      validation: (value) => value.length > 0,
      errorMsg: "닉네임을 입력해주세요.",
    },
  ],
  password: [
    {
      validation: (value) => value.length > 0,
      errorMsg: "비밀번호를 입력해주세요.",
    },
    {
      validation: (value) => value.length >= 8,
      errorMsg: "비밀번호를 8자 이상 입력해주세요.",
    },
  ],
  password_confirm: [
    {
      validation: (value) => value.length > 0,
      errorMsg: "비밀번호를 입력해주세요.",
    },
    {
      validation: (value) => value.length >= 8,
      errorMsg: "비밀번호를 8자 이상 입력해주세요.",
    },
    {
      validation: (value) =>
        value === document.getElementById("password").value,
      errorMsg: "비밀번호가 일치하지 않습니다.",
    },
  ],
};

// 에러 메시지 출력
function errorMsg(msg, target) {
  target.classList.remove("complete");
  target.classList.add("error");

  const exist = target.parentElement.querySelector("span");
  if (exist) exist.remove();

  const span = document.createElement("span");
  span.classList.add("error_text");
  span.textContent = msg;
  target.parentElement.append(span);
}

// 성공 처리
function errorComplete(target) {
  const exist = target.parentElement.querySelector("span");
  if (exist) exist.remove();

  target.classList.remove("error");
  target.classList.add("complete");
}

// 포커스 아웃 이벤트
function focusoutAction(e) {
  const rules = validations[e.target.id];
  if (!rules) return;

  // 첫 번째 실패한 validation rule 찾기
  const failedRule = rules.find(
    (rule) => !rule.validation(e.target.value, e.target)
  );

  if (failedRule) {
    errorMsg(failedRule.errorMsg, e.target);
  } else {
    errorComplete(e.target);
  }

  // 버튼 활성화 / 비활성화 처리
  const inputList = e.target.closest(".input_list");
  const inputs = inputList.querySelectorAll("input");
  const complete = inputList.querySelectorAll(".complete");

  const btn = inputList.nextElementSibling;

  if (inputs.length === complete.length) {
    btn.removeAttribute("disabled");

    if (window.location.href.includes("login")) {
      btn.setAttribute("onclick", 'location.href="/items.html"');
    } else if (window.location.href.includes("signup")) {
      btn.setAttribute("onclick", 'location.href="/login.html"');
    }
  } else {
    btn.setAttribute("disabled", "true");
    btn.removeAttribute("onclick");
  }
}

// 비밀번호 표시/숨기기
function passwordVisibility(e) {
  if (e.target.classList.contains("password_visibility")) {
    if (!e.target.classList.contains("on")) {
      e.target.previousElementSibling.setAttribute("type", "text");
      e.target.setAttribute("aria-label", "비밀번호 가리기");
    } else {
      e.target.previousElementSibling.setAttribute("type", "password");
      e.target.setAttribute("aria-label", "비밀번호 확인하기");
    }
    e.target.classList.toggle("on");
  }
}

// 이벤트 등록
const joinArea = document.querySelector(".join_area");
joinArea.addEventListener("focusout", focusoutAction);
joinArea.addEventListener("click", passwordVisibility);
