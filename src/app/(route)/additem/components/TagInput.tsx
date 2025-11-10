"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";

import Input from "@/components/Input/Input";
import TagList from "@/components/Tag/TagList";

interface TagInputProps {
  onTagsChange?: (tags: string[]) => void;
}

const TagInput = ({ onTagsChange }: TagInputProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // 태그 추가
  const handleAddTag = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTag = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
    if (tags.includes(newTag)) return;

    const updated = [...tags, newTag];
    setTags(updated);
    onTagsChange?.(updated);
    setInputValue("");
  };

  // 키보드 입력으로 태그 추가
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAddTag();
    }
  };

  // 입력값 변경
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 태그 삭제
  const handleDeleteTag = (deleteTag: string) => {
    const updated = tags.filter((tag) => tag !== deleteTag);
    setTags(updated);
    onTagsChange?.(updated);
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <Input
        value={inputValue}
        placeholder="태그를 입력해주세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <TagList tags={tags} onDeleteTag={handleDeleteTag} />
    </div>
  );
};

export default TagInput;
