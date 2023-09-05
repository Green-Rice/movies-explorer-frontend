import { useState } from 'react';
import {Link} from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.png";

const Register = () => {
  const [isError, setIsError] = useState(true);

  return(
    <main>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип" />
        <h2 className="register__title">
          Добро пожаловать!
        </h2>
        <form className="register__form form">
          <fieldset className="form__set">
            <legend className="form__legend">
              Имя
            </legend>
            <input
              type="text"
              className={`form__input ${isError && 'form__input_error'}`}
            />
            <span className={`form__input-error ${isError && 'form__input-error_active'}`}></span>
          </fieldset>

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

          <button className="button form__button">Зарегистрироваться</button>
        </form>
        <p className="register__question">
          Уже зарегистрированы? <Link to="/signin" className="link register__link">Войти</Link>
        </p>
      </section>
    </main>
  )
}

export default Register;