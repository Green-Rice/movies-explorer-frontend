import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.png';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Register = ({
  onSubmit,
  loggedIn,
  errorMessage,
  onClearMessage,
  isLoader,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    return () => {
      onClearMessage();
    };
  }, []);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(values);
  };

  if (loggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <main>
      <section className="register">
        <Link to="/" className="link register__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form form"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="form__set">
            <legend className="form__legend">Имя</legend>
            <input
              type="text"
              className={`form__input ${errors.name && 'form__input_error'}`}
              name="name"
              onChange={handleChange}
              minLength="2"
              maxLength="40"
              required
            />
            <span
              className={`form__input-error ${
                errors.name && 'form__input-error_active'
              }`}
            >
              {errors.name}
            </span>
          </fieldset>

          <fieldset className="form__set">
            <legend className="form__legend">E-mail</legend>
            <input
              type="email"
              className={`form__input ${
                errors['email'] && 'form__input_error'
              }`}
              name="email"
              onChange={handleChange}
              required
              minLength="4"
              maxLength="40"
            />
            <span
              className={`form__input-error ${
                errors.email && 'form__input-error_active'
              }`}
            >
              {errors.email}
            </span>
          </fieldset>

          <fieldset className="form__set">
            <legend className="form__legend">Пароль</legend>
            <input
              type="password"
              className={`form__input ${
                errors.password && 'form__input_error'
              }`}
              name="password"
              onChange={handleChange}
              required
              minLength="4"
              maxLength="40"
            />
            <span
              className={`form__input-error ${
                errors.password && 'form__input-error_active'
              }`}
            >
              {errors.password}
            </span>
          </fieldset>

          <span
            className={`register__error ${
              !!errorMessage && 'register__error_active'
            }`}
          >
            {errorMessage}
          </span>
          <button
            className={`button form__button ${
              (!isValid || isLoader) && 'form__button_inactive'
            }`}
            disabled={!isValid || isLoader}
          >
            {isLoader ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="register__question">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="link register__link">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
