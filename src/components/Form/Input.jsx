import clsx from "clsx";
import styles from "./Input.module.scss";

export default function Input({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  onKeyDown,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={clsx(styles.input, { [styles.error]: error })}
    />
  );
}
