import "./Input.scss";
export default function Input({
  title,
  value,
  placeholder,
  className,
  onChange,
  onKeyDown,
  handleKeyDown,
  name,
  type = "text",
}) {
  const handleChangeInput = (value) => {
    onChange(value);
  };
  return (
    <div className="Input">
      <label htmlFor={name} name={name} className="title-text">
        {title}
      </label>
      <input
        value={value}
        id={name}
        placeholder={placeholder}
        className={className}
        onChange={(e) => handleChangeInput(e.target.value)}
        onKeyDown={handleKeyDown}
        type={type}
        name={name}
      />
    </div>
  );
}
