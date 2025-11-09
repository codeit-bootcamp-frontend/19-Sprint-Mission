import { useState } from 'react';
import styled from 'styled-components';

function Input({ placeholder = '입력해주세요.', value = '', search }) {
  const [text, setText] = useState(value);

  const onChange = (e) => setText(e.target.value);

  return (
    <Inp
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={onChange}
      className={search ? 'search' : ''}
    />
  );
}

export default Input;

const Inp = styled.input`
  width: 352px;
  padding: 16px 19px 14px 19px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  outline: none;

  &.search {
    padding-left: 44px;
    background: #f3f4f6 url('../../public/ico_search.svg') no-repeat left 16px
      center;
  }
`;
