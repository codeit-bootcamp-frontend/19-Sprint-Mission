import classNames from 'classnames';
import styles from './Dropdown.module.css';

const DropdownItem = ({ children, onClick, className }) => {
  return (
    <li
      className={classNames(styles['list-item'], className)}
      onClick={onClick}>
      {children}
    </li>
  );
};

export default DropdownItem;
