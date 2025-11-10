import { useState } from 'react';
import icons from '@/assets/icons/icons';
import Dropdown from '@/components/common/dropdown/Dropdown';
import styles from './SortDropdown.module.css';

const SortDropdown = ({ options, selectedSort, onSelect }) => {
  const optionKeys = Object.keys(options);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSortChange = (sortText) => {
    setIsOpen(false);
    onSelect(sortText);
  };

  return (
    <Dropdown>
      <Dropdown.Button
        className={styles['select-box']}
        onClick={handleClickToggle}
        ariaLabel={'정렬 버튼'}>
        <div className={styles['desktop-content']}>
          {selectedSort}
          <icons.ArrowDownIcon className={styles.icon} />
        </div>
        <icons.SortIcon className={styles['mobile-icon']} />
      </Dropdown.Button>
      <Dropdown.List className={styles['list-container']} isOpen={isOpen}>
        {optionKeys.map((item) => {
          return (
            <Dropdown.Item
              key={item}
              className={styles['list-item']}
              onClick={() => handleSortChange(item)}>
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.List>
    </Dropdown>
  );
};

export default SortDropdown;
