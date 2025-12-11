import { Component } from "react";
import "./Button.scss";

const Button = ({
  as = "button",
  children,
  onClick,
  className,
  disabled,
  ...props
}) => {
  const Component = as || "button";
  return (
    <Component
      className={`button ${className} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
