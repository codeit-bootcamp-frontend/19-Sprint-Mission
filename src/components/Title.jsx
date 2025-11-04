import styled from 'styled-components';

function Title({ title, size }) {
  return <TitleName size={size}>{title}</TitleName>;
}

export default Title;

const TitleName = styled.h2`
  font-size: ${({ size }) => (size ? size + 'px' : '20px')};
  font-weight: 700;
`;
