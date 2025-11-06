"use client";

import { useState } from "react";
import clsx from "clsx";
import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "onChange"> {
  value: string | number;
  type?: "text" | "number";
  placeholder?: string;
  icon?: React.ReactElement;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    value,
    type = "text",
    placeholder = "Enter text...",
    icon,
    disabled = false,
    className,
    onChange,
    ...rest
  },
  ref,
) {
  const [error, setError] = useState("");

  const baseStyle =
    "flex items-center px-6 h-14 text-gray-800 placeholder-gray-400 bg-gray100 rounded-xl";
  const classes = clsx(
    className,
    baseStyle,
    disabled && "pointer-events-none opacity-50",
    error && "border-red border",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const val = e.target.value;
      if (!/^\d*$/.test(val)) {
        setError("숫자만 입력 가능합니다.");
        return;
      } else {
        setError("");
      }
    }
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className={classes}>
        <input
          ref={ref}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className="min-w-0 flex-1 bg-transparent outline-none"
          onChange={handleChange}
          {...rest}
        />
        {icon && <span className="ml-2 shrink-0">{icon}</span>}
      </div>
      {error && <p className="px-2 text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
