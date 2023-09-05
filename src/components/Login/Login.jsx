import { useState } from 'react';
import {Link} from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.png";

const Login = () => {
  const [isError, setIsError] = useState(true);

  return(
    <main>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <h2 className="login__title">
          Рады видеть!
        </h2>
        <form className="login__form form">
          <fieldset className="form__set">
            <legend className="form__legend">
              E-mail
            </legend>
            <input
              type="email"
              className={`form__input ${isError && 'form__input_error'}`}
            />
            <span className={`form__input-error ${isError && 'form__input-error_active'}`}></span>
          </fieldset>

          <fieldset className="form__set">
            <legend className="form__legend">
              Пароль
            </legend>
            <input
              type="password"
              className={`form__input ${isError && 'form__input_error'}`}
            />
            <span
              className={`form__input-error ${isError && 'form__input-error_active'}`}
            >
              Что-то пошло не так...
            </span>
          </fieldset>

          <button className="button form__button">Войти</button>
        </form>
        <p className="login__question">
          Ещё не зарегистрированы? <Link to="/signup" className="link login__link">Регистрация</Link>
        </p>
      </section>
    </main>
  )
}

export default Login;