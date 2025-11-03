import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Button({ buttonName, to }) {
  const Component = to ? Link : 'button';

  return (
    <Btn as={Component} to={to}>
      {buttonName}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  padding: 8px 23px;
  font-weight: 600;
  color: #f3f4f6;
  border: none;
  border-radius: 8px;
  background-color: #3692ff;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
