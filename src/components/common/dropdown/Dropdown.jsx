import styles from './Dropdown.module.css';
import DropdownButton from './DropdownButton';
import DropdownItem from './DropdownItem';
import DropdownList from './DropdownList';

const Dropdown = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
