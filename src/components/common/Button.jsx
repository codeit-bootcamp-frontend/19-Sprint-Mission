import { Component } from "react";
import "./Button.scss";

const Button = ({ as = "button", children, onClick, ...props }) => {
  const Component = as || "button";
  return (
    <Component className="button" onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

export default Button;
