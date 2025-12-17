import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Button = forwardRef(
  (
    {
      as = "button",
      children,
      variant = "primary",
      size = "md",
      fullWidth,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const Component = as;

    const baseStyles = `
      inline-flex items-center justify-center font-medium  transition
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: "bg-primary-200 text-white hover:bg-blue-700",
      secondary: "bg-gray-400 text-gray-100 hover:bg-gray-300",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <Component
        ref={ref}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Component>
    );
  }
);

export default Button;
