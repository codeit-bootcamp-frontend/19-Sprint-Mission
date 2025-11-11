import classNames from 'classnames';
import styles from './Dropdown.module.css';

const DropdownList = ({ isOpen, children, className }) => {
  return (
    isOpen && (
      <ul className={classNames(styles['list-container'], className)}>
        {children}
      </ul>
    )
  );
};

export default DropdownList;
