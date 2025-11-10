import classNames from 'classnames';
import styles from './Textarea.module.css';

const Textarea = ({ placeholder, id, value, onChange, className }) => {
  return (
    <textarea
      className={classNames(styles.container, className)}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
