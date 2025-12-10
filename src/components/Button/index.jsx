import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({
  children,
  onClick,
  size,
  disabled,
  type = "button",
  href,
}) {
  return (
    <>
      {type === "link" ? (
        <a href={href} className={clsx(styles.btn, size && styles[size])}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          className={clsx(styles.btn, size && styles[size])}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
}
