import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Header() {
  return (
    <HeaderWrap>
      <div>
        <h1>
          <Link to="/">
            <img
              src="/logo_face.png"
              alt="판다마켓 로고 얼굴"
              className="face"
            />
            <img src="/logo.png" alt="판다마켓 로고" className="logo" />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">자유게시판</Link>
          </li>
          <li>
            <Link to="/items">중고마켓</Link>
          </li>
        </ul>
      </div>
      <Link to="/" title="프로필로 이동" className="profile"></Link>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 200px;
  border-bottom: 1px solid #dfdfdf;

  > div {
    display: flex;
  }

  h1 {
    a {
      display: flex;
      align-items: center;
      color: #4b5563;
    }
  }

  .face {
    width: 40px;
    margin-right: 9px;
  }

  .logo {
    width: 103px;
  }

  ul {
    display: flex;
    align-items: center;
    margin-left: 47px;

    li ~ li {
      margin-left: 30px;
    }

    a {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('../../public/profile.png') no-repeat #dfdfdf;
    background-size: 100%;
  }
`;
