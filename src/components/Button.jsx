export default function Button({
  children,
  onClick,
  size,
  disabled,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
