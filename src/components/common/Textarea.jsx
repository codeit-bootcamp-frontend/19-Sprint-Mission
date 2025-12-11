import "./Textarea.scss";
export default function Textarea({ title, onChange, placeholder }) {
  const handleChangeTextarea = (value) => {
    onChange(value);
  };

  return (
    <div className="Textarea">
      <label className="title-text">{title}</label>
      <textarea
        onChange={(e) => handleChangeTextarea(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
