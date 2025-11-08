import { Link } from "react-router-dom";
import btnGoggle from "@/assets/img/content/btn_google.png";
import btnKakao from "@/assets/img/content/btn_kakao.png";

function Login() {
  return (
    <main className="formWrap">
      <h1 className="logo">
        <Link to="/">
          <span className="blind">판다마켓</span>
        </Link>
      </h1>

      <form className="authForm">
        <div className="iptBox">
          <label htmlFor="email">이메일</label>
          <div className="ipt">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요."
            />
          </div>
        </div>
        <div className="iptBox">
          <label htmlFor="pw">비밀번호</label>
          <div className="ipt">
            <input
              id="pw"
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
            />
            <button type="button" className="btnEye">
              <span className="blind">비밀번호 숨김</span>
            </button>
          </div>
        </div>
        <button type="submit" name="login" className="btn lg">
          로그인
        </button>
      </form>

      <div className="socialBtn">
        <span className="tit">간편 로그인하기</span>
        <div className="btns">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <img src={btnGoggle} alt="구글 로그인" />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <img src={btnKakao} alt="카카오톡 로그인" />
          </a>
        </div>
      </div>

      <div className="guideBtn">
        <span className="tit">판다마켓이 처음이신가요?</span>
        <Link to="/signup" className="btnTxt">
          회원가입
        </Link>
      </div>
    </main>
  );
}

export default Login;
