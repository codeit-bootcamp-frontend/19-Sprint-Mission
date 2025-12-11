import "./Input.scss";
export default function Input({ title, placeholder, className, onChange }) {
  return (
    <div className="Input">
      <label className="input-label">{title}</label>
      <input
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}
