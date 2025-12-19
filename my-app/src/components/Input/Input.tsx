import React, { forwardRef } from "react";
import { inputVariants } from "./InputVariants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: "default" | "error" | "success" | "ghost";
  size?: "sm" | "md" | "lg"; 
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(clsx(inputVariants({ variant, size }), className))}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;