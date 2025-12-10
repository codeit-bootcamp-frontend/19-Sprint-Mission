import { Link } from "react-router-dom";

import styles from "./AuthLinks.module.scss";

export default function AuthLinks({ type }) {
  return (
    <>
      <div className={styles.socialBtn}>
        <span className={styles.tit}>간편 로그인하기 </span>
        <div className={styles.btns}>
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

      <div className={styles.guideBtn}>
        {type === "Signup" ? (
          <>
            <span className={styles.tit}>이미 회원이신가요?</span>
            <Link to="/login" className={styles.btnTxt}>
              로그인
            </Link>
          </>
        ) : (
          <>
            <span className={styles.tit}>판다마켓이 처음이신가요?</span>
            <Link to="/signup" className={styles.btnTxt}>
              회원가입
            </Link>
          </>
        )}
      </div>
    </>
  );
}
