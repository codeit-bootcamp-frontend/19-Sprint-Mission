import styles from './Input.module.css';

const Input = ({ className = '', ...props }) => {
  const { error, value } = props;

  const inputClassName = `${styles.input} ${
    error ? styles['input-error'] : ''
  } ${value && !error ? styles['input-complete'] : ''} ${className}`;

  return <input className={inputClassName} {...props} />;
};

export default Input;
