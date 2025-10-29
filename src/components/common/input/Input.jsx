import classNames from 'classnames';
import styles from './Input.module.css';

const Input = ({
  className = '',
  id,
  type = 'text',
  placeholder,
  ...props
}) => {
  const { error, value } = props;

  return (
    <input
      className={classNames(
        styles.input,
        {
          [styles['input-error']]: error,
          [styles['input-complete']]: value && !error,
        },
        className
      )}
      id={id}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
