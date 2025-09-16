import icons from '@/assets/icons/icons';
import styles from './AuthInput.module.css';

const AuthInput = ({
  id,
  label,
  type = 'text',
  name,
  placeholder,
  autoComplete,
  errorMsg,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles['input-area']}>
        <input
          id={id}
          className={styles.input}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {type === 'password' && (
          <button
            className={styles['show-password-button']}
            type="button"
            aria-label="비밀번호 보기">
            {<icons.HidePasswordIcon />}
          </button>
        )}
      </div>
      {errorMsg && <span className={styles['error-msg']}>{errorMsg}</span>}
    </div>
  );
};

export default AuthInput;
