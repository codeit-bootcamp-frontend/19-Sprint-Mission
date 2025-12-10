import styles from "./Label.module.scss";

export default function Label({ htmlFor, children }) {
  return (
    <>
      {htmlFor ? (
        <label htmlFor={htmlFor} className={styles.label}>
          {children}
        </label>
      ) : (
        <div className={styles.label}>{children}</div>
        // <div></div>
      )}
    </>
  );
}
