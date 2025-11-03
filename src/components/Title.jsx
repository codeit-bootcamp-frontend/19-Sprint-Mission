import styled from 'styled-components';

function Title({ title }) {
  return <TitleName>{title}</TitleName>;
}

export default Title;

const TitleName = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
