import { Children } from "react";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <div className={styles.error}>{children}</div>;
}
