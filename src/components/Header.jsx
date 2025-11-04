import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
function Header() {
  const location = useLocation();

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
          <li className={location.pathname === '/items' ? 'active' : ''}>
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
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }

  .logo {
    width: 103px;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }

  ul {
    display: flex;
    align-items: center;
    margin-left: 47px;

    li ~ li {
      margin-left: 30px;
    }

    .active {
      a {
        color: #3692ff;
        transition: opacity 0.5s;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    a {
      font-size: 18px;
      font-weight: 700;
      transition: color 0.5s;

      &:hover {
        color: #3692ff;
      }
    }
  }

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('../../public/profile.png') no-repeat #dfdfdf;
    background-size: 100%;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }

  // 테블릿
  @media (max-width: 900px) {
    padding: 10px 24px;
  }

  // 모바일
  @media (max-width: 600px) {
    padding: 15px;

    .face {
      display: none;
    }

    > div {
      align-items: center;
    }

    ul {
      margin-left: 8px;
      li ~ li {
        margin-left: 8px;
      }
    }
  }
`;
