import { useState } from 'react';
import Icons from '@/assets/icons/icons';
import Input from '@/components/common/input/Input';
import Label from '@/components/common/label/Label';
import styles from './TagInput.module.css';

const TagInput = ({ name, value, onChange }) => {
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();

      if (value.includes(newTag)) {
        setError(`"${newTag}" 태그는 이미 추가되었습니다.`);
      } else {
        onChange(name, [...value, newTag]);
        setError('');
      }

      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    onChange(
      name,
      value.filter((t) => t !== tag)
    );
  };

  return (
    <div className={styles.container}>
      <Label id="tags" label="태그" />
      <Input
        id="tags"
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {error && <span className={styles.error}>{error}</span>}
      {value.length > 0 && (
        <ul className={styles['tag-area']}>
          {value.map((t) => {
            return (
              <li key={t} className={styles.tag}>
                #{t}
                <button
                  className={styles['remove-button']}
                  type="button"
                  onClick={() => handleRemoveTag(t)}>
                  <Icons.RemoveIcon />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
