import styled from "styled-components";
import LoginLogo from "@/assets/image/loginLogo.svg";

function LoginMeun() {
  return (
    <LoginMeunStyled aria-label="로그인 메뉴">
      <button>
        <img src={LoginLogo} alt="로그인" />
      </button>
    </LoginMeunStyled>
  );
}

const LoginMeunStyled = styled.nav`
  margin-left: auto;
`;

export default LoginMeun;
