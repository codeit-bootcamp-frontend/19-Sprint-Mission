import { Link } from "react-router-dom";
import btnGoggle from "@/assets/img/content/btn_google.png";
import btnKakao from "@/assets/img/content/btn_kakao.png";

function Signup() {
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
          <label htmlFor="username">닉네임</label>
          <div className="ipt">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="닉네임을 입력해 주세요."
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
        <div className="iptBox">
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <div className="ipt">
            <input
              id="pwCheck"
              name="pwCheck"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
            />
            <button type="button" className="btnEye">
              <span className="blind">비밀번호 숨김</span>
            </button>
          </div>
        </div>
        <button type="submit" name="signup" className="btn lg">
          회원가입
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
        <span className="tit">이미 회원이신가요?</span>
        <Link to="/login" className="btnTxt">
          로그인
        </Link>
      </div>
    </main>
  );
}

export default Signup;
