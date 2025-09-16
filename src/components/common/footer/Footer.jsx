import { Link } from 'react-router';
import icons from '@/assets/icons/icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contents}>
        <h5 className={styles['company-info']}>©codeit - 2024</h5>
        <div className={styles['link-area']}>
          <Link to="/privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="/privacy" className={styles.link}>
            FAQ
          </Link>
        </div>
        <div className={styles['sns-area']}>
          <Link
            href="https://www.facebook.com/codeit.kr/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={icons.facebookIcon} alt="페이스북" />
          </Link>
          <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={icons.twitterIcon} alt="X(트위터)" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
            target="_blank"
            rel="noopener noreferrer">
            <img src={icons.youtubeIcon} alt="유튜브" />
          </Link>
          <Link
            href="https://www.instagram.com/codeit_kr/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={icons.instgramIcon} alt="인스타그램" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
