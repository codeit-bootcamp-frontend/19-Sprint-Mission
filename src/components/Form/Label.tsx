import styles from "./Label.module.scss";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <>
      {htmlFor ? (
        <label htmlFor={htmlFor} className={styles.label}>
          {children}
        </label>
      ) : (
        <div className={styles.label}>{children}</div>
      )}
    </>
  );
}
