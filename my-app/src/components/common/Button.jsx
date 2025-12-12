import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  leftIcon,
  rightIcon,
  className = "",
  to,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-md transition
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: "bg-primary-100 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const handleClick= (e) =>{
    if(to) {
        navigate(to)
    }
    if(onClick) {
        onClick(e)
    }
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      onClick={handleClick}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
