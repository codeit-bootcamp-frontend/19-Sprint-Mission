import styles from './Label.module.css';

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
  );
};

export default Label;
