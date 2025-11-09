import { useState } from 'react';
import styled from 'styled-components';

function TagInput({
  placeholder = '태그를 입력해주세요',
  value = '',
  onChange,
}) {
  const [text, setText] = useState(value);
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      e.preventDefault();

      const newTags = [...tags, text.trim()];
      setTags(newTags);

      setText('');
      onChange?.('');
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    onChange?.(e.target.value);
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    // onChange?.(newTags.join(', '));
  };

  return (
    <TagInputWrap>
      <InputField
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {tags.length > 0 && (
        <TagList>
          {tags.map((tag, index) => (
            <Tag key={index}>
              <span>#{tag}</span>
              <RemoveButton
                onClick={() => handleRemoveTag(index)}
              ></RemoveButton>
            </Tag>
          ))}
        </TagList>
      )}
    </TagInputWrap>
  );
}

export default TagInput;

const TagInputWrap = styled.div`
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 19px 14px 19px;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: #f3f4f6;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: 14px;
  margin-left: -14px;
`;

const Tag = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 12px 5px 16px;
  background-color: #f3f4f6;
  color: #1f2937;
  border-radius: 20px;
  font-size: 14px;
  margin-left: 14px;
`;

const RemoveButton = styled.button`
  width: 22px;
  height: 24px;
  margin-left: 8px;
  background: url('../../public/ico_taginput_del.svg') no-repeat;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
