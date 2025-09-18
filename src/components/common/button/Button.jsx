import styles from './Button.module.css';

const Button = ({
  as: Component = 'button',
  size = 's',
  children,
  full = false,
  ...props
}) => {
  const className = `${styles.button} ${styles[`button-${size}`]} ${
    full ? styles['button-full'] : ''
  }`;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default Button;
