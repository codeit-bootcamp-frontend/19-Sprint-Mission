import classNames from 'classnames';
import styles from './Label.module.css';

const Label = ({ id, label, className }) => {
  return (
    <label htmlFor={id} className={classNames(styles.label, className)}>
      {label}
    </label>
  );
};

export default Label;
