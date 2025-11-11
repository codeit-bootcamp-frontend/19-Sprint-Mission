const DropdownButton = ({ children, onClick, className, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default DropdownButton;
