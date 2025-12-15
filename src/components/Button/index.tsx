import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "mid" | "mid2" | "lg";
  variant?: "white" | "back";
  disabled?: boolean;
  href?: string;
  as?: "button" | "a";
}
export default function Button({
  href,
  type,
  children,
  onClick,
  variant,
  size,
  disabled,
  as = "button",
}: ButtonProps) {
  const Component = as;

  return (
    <Component
      href={href}
      type={type}
      className={clsx(
        styles.btn,
        size && styles[size],
        variant && styles[variant]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Component>
  );
}
