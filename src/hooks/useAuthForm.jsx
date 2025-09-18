import { useState } from 'react';
import { validators } from '@/utils/validators';

const useAuthForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const checkFormValid = () => {
    return Object.keys(values).every((key) => {
      return (
        values[key] &&
        !(validators[key] && validators[key](values[key], values))
      );
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => {
      const errorMsg = validators[name] ? validators[name](value, values) : '';
      return { ...prev, [name]: errorMsg };
    });

    setIsValid(checkFormValid());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };

  return {
    values,
    errors,
    isValid,
    showPassword,
    handleBlur,
    handleChange,
    handlePasswordToggle,
  };
};

export default useAuthForm;
