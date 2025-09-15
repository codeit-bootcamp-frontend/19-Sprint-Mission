import styles from './Button.module.css';

const Button = ({
  as: Component = 'button',
  size = 's',
  children,
  ...props
}) => {
  const className = `${styles.button} ${styles[`button-${size}`]}`;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default Button;
