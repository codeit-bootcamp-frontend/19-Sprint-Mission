import { useState } from 'react';
import Icons from '@/assets/icons/icons';
import Input from '@/components/common/input/Input';
import Label from '@/components/common/label/Label';
import styles from './TagInput.module.css';

const TagInput = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();

      if (tags.includes(newTag)) {
        setError(`"${newTag}" 태그는 이미 추가되었습니다.`);
      } else {
        setTags((prev) => [...prev, newTag]);
        setError('');
      }

      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
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
      {error && <p className={styles.error}>{error}</p>}
      {tags.length > 0 && (
        <ul className={styles['tag-area']}>
          {tags.map((t) => {
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
