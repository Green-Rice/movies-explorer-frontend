import React, { useCallback } from 'react';
import validator from 'validator';
import { ERROR_MESSAGES } from '../utils/messages';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    if (name === 'email') {
      const isEmail = validator.isEmail(value);
      if (!isEmail) {
        setErrors({
          ...errors,
          [name]: target.validationMessage || ERROR_MESSAGES.ENTER_EMAIL,
        });
        setIsValid(isEmail);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
