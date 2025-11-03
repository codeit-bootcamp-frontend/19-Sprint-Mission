import styled from 'styled-components';

function Input({ placeholder = '입력해주세요.', value = '' }) {
  return <Inp type="text" placeholder={placeholder} value={value} />;
}

export default Input;

const Inp = styled.input`
  width: 352px;
  padding: 9px 19px 10px 44px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  background: #f3f4f6 url('../../public/ico_search.svg') no-repeat left 16px
    center;
  outline: none;
`;
