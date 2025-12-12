import clsx from "clsx";
import styles from "./Input.module.scss";
import type React from "react";

interface PwShowState {
  password: boolean;
  passwordCheck: boolean;
}

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error: boolean;
  pwShow?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function Input({
  id,
  name,
  type,
  placeholder,
  value,
  error,
  pwShow,
  onChange,
  onBlur,
  onKeyDown,
}: InputProps) {
  const isToggle = pwShow?.[name];
  return (
    <input
      id={id}
      name={name}
      type={isToggle ? "text" : type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={clsx(styles.input, error && [styles.error])}
    />
  );
}
