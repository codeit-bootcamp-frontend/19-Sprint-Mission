import styles from './Input.module.css';

const Input = ({
  className = '',
  id,
  type = 'text',
  placeholder,
  ...props
}) => {
  const { error, value } = props;

  const inputClassName = `${styles.input} ${
    error ? styles['input-error'] : ''
  } ${value && !error ? styles['input-complete'] : ''} ${className}`;

  return (
    <input
      className={inputClassName}
      id={id}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
