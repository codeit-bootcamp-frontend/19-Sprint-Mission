export default function Button({ children, onClick, size, disabled }) {
  return (
    <button className={`btn ${size}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
