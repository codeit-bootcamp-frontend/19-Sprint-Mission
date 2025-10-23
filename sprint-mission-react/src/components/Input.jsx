import React from "react";
const Input = ({
  id,
  name,
  type,
  placeholder,
  autoComplete,
  onBlur,
  value,
  onChange,
}) => {
  const handleBlur = (e) => {
    if (onBlur) onBlur(e.target.name);
  };
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
