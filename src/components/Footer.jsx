import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="copy">©codeit - 2024</div>
        <div className="link">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/main/ic_facebook.png" alt="facebook" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/main/ic_twitter.png" alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/main/ic_youtube.png" alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/main/ic_instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
