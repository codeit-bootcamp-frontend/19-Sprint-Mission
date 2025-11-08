export default function Button({ children, onClick, size }) {
  return (
    <button className={`btn ${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
