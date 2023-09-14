import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { EMAIL_PATTERN } from '../../utils/consts';
import { useEffect } from 'react';

const Login = ({ onSubmit, loggedIn, errorMessage, onClearMessage }) => {
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
      <section className="login">
        <Link to="/" className="link login__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form form" onSubmit={handleSubmit} noValidate>
          <fieldset className="form__set">
            <legend className="form__legend">E-mail</legend>
            <input
              type="email"
              className={`form__input ${errors.email && 'form__input_error'}`}
              name="email"
              onChange={handleChange}
              required
              minLength="4"
              maxLength="40"
              pattern={EMAIL_PATTERN}
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
            className={`login__error ${
              !!errorMessage && 'login__error_active'
            }`}
          >
            {errorMessage}
          </span>
          <button
            className={`button form__button ${
              !isValid && 'form__button_inactive'
            }`}
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className="login__question">
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="link login__link">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
