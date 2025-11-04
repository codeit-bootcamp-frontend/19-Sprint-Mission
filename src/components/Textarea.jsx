import { useState } from 'react';
import styled from 'styled-components';

function Textarea({ placeholder = '입력해주세요.', value = '' }) {
  const [text, setText] = useState(value);

  const onChange = (e) => setText(e.target.value);

  return (
    <TextareaWrap
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={onChange}
    />
  );
}

export default Textarea;

const TextareaWrap = styled.textarea`
  width: 100%;
  padding: 16px 24px;
  height: 282px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  outline: none;
`;
