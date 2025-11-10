const DropdownButton = ({ children, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default DropdownButton;
