import "./Input.scss";
export default function Input({ title, placeholder, className, onChange }) {
  return (
    <div className="Input">
      <label className="title-text">{title}</label>
      <input
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}
