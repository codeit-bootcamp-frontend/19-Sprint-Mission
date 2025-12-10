import styles from "./Textarea.module.scss";

export default function Textarea({ id, name, placeholder, value, onChange }) {
  return (
    <textarea
      className={styles.textarea}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
