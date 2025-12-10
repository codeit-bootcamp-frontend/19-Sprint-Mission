import "./Input.scss";
export default function Input({ title, placeholder }) {
  return (
    <div className="Input">
      <label className="input-label">{title}</label>
      <input placeholder={placeholder} />
    </div>
  );
}
