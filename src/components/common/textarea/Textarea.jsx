import styles from './Textarea.module.css';

const Textarea = ({ value, onChange, placeholder, id }) => {
  return (
    <textarea
      className={styles.container}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
