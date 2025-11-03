import images from '@/assets/images/images';
import styles from './SnsLogin.module.css';

const SnsLogin = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>간편 로그인하기</span>
      <a
        className={styles.link}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer">
        <img className={styles.img} src={images.authGoogle} alt="구글 로그인" />
      </a>
      <a
        className={styles.link}
        href="https://www.kakaocorp.com/page/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className={styles.img}
          src={images.authKakao}
          alt="카카오 로그인"
        />
      </a>
    </div>
  );
};

export default SnsLogin;
