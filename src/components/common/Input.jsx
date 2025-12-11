import "./Input.scss";
export default function Input({
  title,
  placeholder,
  type = "text",
  className,
  onChange,
}) {
  const handleChangeInput = (value) => {
    onChange(value);
  };
  return (
    <div className="Input">
      <label className="title-text">{title}</label>
      <input
        placeholder={placeholder}
        className={className}
        onChange={(e) => handleChangeInput(e.target.value)}
        type={type}
      />
    </div>
  );
}
