import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({
  as: Component = 'button',
  size = 's',
  children,
  full = false,
  className = '',
  ...props
}) => {
  return (
    <Component
      className={classNames(
        styles.button,
        styles[`button-${size}`],
        { [styles['button-full']]: full },
        className
      )}
      {...props}>
      {children}
    </Component>
  );
};

export default Button;
