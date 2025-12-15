import { useState } from 'react';
import Input from './Input';
import Tag from '../Tags/Tags';

export default function TagInput({
  tags = [],
  onChange,
  placeholder,
  tagVariant = 'default',
}) {
  const [value, setValue] = useState('');

  const addTag = () => {
    const keyword = value.trim();
    if (!keyword) return;
    if (tags.includes(keyword)) return;

    onChange([...tags, keyword]);
    setValue('');
  };

  const removeTag = (keyword) => {
    onChange(tags.filter(tag => tag !== keyword));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }

    if (e.key === 'Backspace' && !value) {
      onChange(tags.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Input 영역 (높이 고정) */}
      <div className="rounded-md border border-gray-300 bg-gray-200 px-2 py-1">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="border-0 focus:ring-0"
        />
      </div>

      {/* Tag List 영역 (완전 분리) */}
      {tags.length > 0 && (
        <div className="rounded-md  bg-white px-3 py-2">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Tag
                key={tag}
                variant={tagVariant}
                onRemove={() => removeTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
