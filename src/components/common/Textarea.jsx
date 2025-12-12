import "./Textarea.scss";
export default function Textarea({ title, name, onChange, placeholder }) {
  const handleChangeTextarea = (value) => {
    onChange(value);
  };

  return (
    <div className="Textarea">
      <label htmlFor={name} className="title-text">
        {title}
      </label>
      <textarea
        id={name}
        onChange={(e) => handleChangeTextarea(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
