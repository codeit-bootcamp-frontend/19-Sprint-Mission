import "./Input.scss";
export default function Input({ title, placeholder, className }) {
  return (
    <div className="Input">
      <label className="input-label">{title}</label>
      <input placeholder={placeholder} className={className} />
    </div>
  );
}
