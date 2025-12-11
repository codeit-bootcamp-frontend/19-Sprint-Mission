import { useState } from "react";
import Input from "./Input";
import Tag from "./Tag";
import "./TagInput.scss";
export default function TagInput({ title, name, tags, setTags, placeholder }) {
  const [input, setInput] = useState("");
  const handleChange = (value) => {
    setInput(value);
  };
  const handleAddTags = () => {
    const newTag = input.trim();
    if (!newTag) {
      return;
    }
    if (tags.includes(newTag)) {
      setInput("");
      return;
    }
    setTags([...tags, newTag]);
    setInput("");
    console.log(newTag);
  };

  const onDelete = (tag) => {
    console.log(tag);
    setTags(tags.filter((t) => tag !== t));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleAddTags();
    }
  };

  return (
    <div className="TagInput">
      <Input
        value={input}
        name={name}
        title={title}
        placeholder={placeholder}
        onChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <div className="tags-container">
        {tags.map((tag) => (
          <Tag key={tag} onDelete={() => onDelete(tag)}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}
