import { useState } from 'react';
import icons from '@/assets/icons/icons';
import styles from './SelectBox.module.css';

const SelectBox = ({ options, onSelect }) => {
  const optionKeys = Object.keys(options);
  const [selectedSort, setSelectedSort] = useState(optionKeys[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const handleSortChange = (sortText) => {
    setSelectedSort(sortText);
    setIsOpen(false);
    onSelect(options[sortText]);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles['select-box']}
        type="button"
        onClick={handleClickToggle}>
        {selectedSort}
        <icons.ArrowDownIcon className={styles.icon} />
      </button>
      {isOpen && (
        <ul className={styles['list-container']}>
          {optionKeys.map((item) => {
            return (
              <li
                key={item}
                className={styles['list-item']}
                onClick={() => {
                  return handleSortChange(item);
                }}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
