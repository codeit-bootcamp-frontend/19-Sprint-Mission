import "./Input.scss";
export default function Input({
  title,
  placeholder,
  type = "text",
  className,
  onChange,
}) {
  return (
    <div className="Input">
      <label className="title-text">{title}</label>
      <input
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
