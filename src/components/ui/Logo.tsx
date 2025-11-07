import { styled, css } from "styled-components";
import { Link, type LinkProps } from "react-router-dom";
import pandaLogo from "@/assets/image/pandaLogo.svg";

interface LogoProps extends Omit<LinkProps, "to"> {
  to?: string;
  src?: string;
  alt?: string;
  height?: number;
}

const Logo = ({
  to,
  src = pandaLogo,
  alt = "판다마켓",
  height = 40,
  ...props
}: LogoProps) => {
  if (!to) {
    return (
      <LogoStyledDiv>
        <img src={src} alt={alt} height={height} />
      </LogoStyledDiv>
    );
  }

  return (
    <LogoStyledLink to={to} {...props}>
      <img src={src} alt={alt} height={height} />
    </LogoStyledLink>
  );
};

const logoStyles = css`
  img {
    width: auto;
    display: block;
  }
`;

const LogoStyledLink = styled(Link)`
  ${logoStyles}
`;

const LogoStyledDiv = styled.div`
  ${logoStyles}
`;

export default Logo;
