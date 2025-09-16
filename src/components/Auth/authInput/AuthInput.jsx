import icons from '@/assets/icons/icons';
import useAuthForm from '@/hooks/useAuthForm';
import styles from './AuthInput.module.css';

const AuthInput = ({
  id,
  label,
  type = 'text',
  name,
  placeholder,
  autoComplete,
  value,
  handleChange,
  handleBlur,
  error,
}) => {
  const { showPassword, handlePasswordToggle } = useAuthForm();

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const inputClassName = `${styles.input} ${
    error ? styles['input-error'] : ''
  } ${value && !error ? styles['input-complete'] : ''}`;

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles['input-area']}>
        <input
          id={id}
          className={inputClassName}
          type={inputType}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {type === 'password' && (
          <button
            className={styles['show-password-button']}
            type="button"
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            onClick={handlePasswordToggle}>
            {showPassword ? (
              <icons.ShowPasswordIcon />
            ) : (
              <icons.HidePasswordIcon />
            )}
          </button>
        )}
      </div>
      {error && <span className={styles['error-msg']}>{error}</span>}
    </div>
  );
};

export default AuthInput;
