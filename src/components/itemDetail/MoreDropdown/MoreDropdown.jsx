import { useState } from 'react';
import Icons from '@/assets/icons/icons';
import Dropdown from '@/components/common/dropdown/Dropdown';
import styles from './MoreDropdown.module.css';

const MoreDropdown = ({ items, ariaLabel = '더보기 버튼' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (onClick) => {
    onClick?.();
    setIsOpen(false);
  };

  return (
    <Dropdown>
      <Dropdown.Button onClick={handleClickToggle} ariaLabel={ariaLabel}>
        <Icons.KebabIcon />
      </Dropdown.Button>
      <Dropdown.List isOpen={isOpen} className={styles['list-container']}>
        {items.map(({ label, onClick }) => {
          return (
            <Dropdown.Item
              key={label}
              className={styles.item}
              onClick={() => handleItemClick(onClick)}>
              {label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.List>
    </Dropdown>
  );
};

export default MoreDropdown;
