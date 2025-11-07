import { Header as HeaderStyled, HeaderWrap } from "./Header.styled";

interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <HeaderStyled>
      <HeaderWrap>{children}</HeaderWrap>
    </HeaderStyled>
  );
}

export default Header;
