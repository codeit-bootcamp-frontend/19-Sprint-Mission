import styles from "./InputForm.module.scss";
import Label from "@/components/Form/Label";
import Input from "@/components/Form/Input";
import ErrorMessage from "@/components/Form/ErrorMessage";
import type { ReactNode } from "react";

interface PwShowState {
  password: boolean;
  passwordCheck: boolean;
}

interface InputFormProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  pwShow: PwShowState;
  onChange: (value: string) => void;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  handleFocus: React.FocusEventHandler<HTMLInputElement>;
  inputError?: any;
  suffix?: ReactNode;
}

export default function InputForm({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  pwShow,
  onChange,
  onKeyDown,
  handleFocus,
  inputError,
  suffix,
}: InputFormProps) {
  const currentError = inputError?.hasError;
  return (
    <div className={styles.iptBox}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.ipt}>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value.trim())
          }
          onBlur={handleFocus}
          pwShow={pwShow}
          onKeyDown={onKeyDown}
          error={currentError}
        />
        {suffix}
      </div>
      {currentError && <ErrorMessage>{inputError.message}</ErrorMessage>}
    </div>
  );
}
