import { Link } from "react-router-dom";

export default function AuthLinks({ type }) {
  return (
    <>
      <div className="socialBtn">
        <span className="tit">간편 로그인하기</span>
        <div className="btns">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <img src="/img/content/btn_google.png" alt="구글 로그인" />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <img src="/img/content/btn_kakao.png" alt="카카오톡 로그인" />
          </a>
        </div>
      </div>

      <div className="guideBtn">
        {type === "Signup" ? (
          <>
            <span className="tit">이미 회원이신가요?</span>
            <Link to="/login" className="btnTxt">
              로그인
            </Link>
          </>
        ) : (
          <>
            <span className="tit">판다마켓이 처음이신가요?</span>
            <Link to="/signup" className="btnTxt">
              회원가입
            </Link>
          </>
        )}
      </div>
    </>
  );
}
