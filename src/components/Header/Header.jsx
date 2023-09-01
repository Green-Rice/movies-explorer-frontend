import "./Header.css";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import burgerBtn from "../../images/burger-menu-btn.svg";
import closeBtn from "../../images/close-btn.svg";
import { useState } from 'react';

const Header = ({loggedIn}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { pathname } = useLocation();
  const isMainPage = pathname === '/'

  const toggleBtnMenu = () => {
    setIsBurgerOpen(state => !state)
  }

  if (loggedIn) {
    return (
      <>
        <header className={`header ${isMainPage && 'header__main'}`}>
          <Link to="/" className="link header__link_type_logo>">
            <img src={logo} className="header__logo" alt='Логотип' />
          </Link>
          <div className="header__nav header__nav_type_loggedIn">
            <div className="header__flex">
              <NavLink to="/movies" className={({isActive}) => `${isActive ? "link header__navLink header__navLink_active" : "link header__navLink"}`}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className={({isActive}) => `${isActive ? "link header__navLink header__navLink_active" : "link header__navLink"}`}>Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className="link header__navLink">
              <img src={profile} alt='Кнопка аккаунта'/>
            </NavLink>
          </div>

          <div className="burger">
            <button
              type="button"
              className={`button burger__button`}
              onClick={toggleBtnMenu}
            >
              <img src={burgerBtn} alt="Линия"/>
            </button>

            <div className={`burger__container ${isBurgerOpen && "burger__container_opened"}`}>
              <button type="button" className="button burger__button burger__button_type_close" onClick={toggleBtnMenu}>
                <img className="burger__close" src={closeBtn} alt="Крестик"/>
              </button>
              <div className="burger__flex-column">
                <NavLink
                  to="/"
                  className={({isActive}) => `${isActive ? "link burger__link burger__link_active" : "link burger__link"}`}
                  onClick={toggleBtnMenu}
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  className={({isActive}) => `${isActive ? "link burger__link burger__link_active" : "link burger__link"}`}
                  onClick={toggleBtnMenu}
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={({isActive}) => `${isActive ? "link burger__link burger__link_active" : "link burger__link"}`}
                  onClick={toggleBtnMenu}
                >
                  Сохранённые фильмы
                </NavLink>
              </div>
              <NavLink to="/profile" className="link burger__link burger__link_type_profile">
                <img src={profile} alt='Кнопка аккаунта'/>
              </NavLink>
            </div>
          </div>
        </header>
        <Outlet />
      </>
    )
  }

  return(
    <>
      <header className="header">
        <Link to="/" className="link header__link_type_logo>">
          <img src={logo} className="header__logo" alt='Логотип' />
        </Link>
        <div className="header__nav">
          <Link to="/signup" className="link header__link">Регистрация</Link>
          <Link to="/signin" className="link header__link header__link_type_btn">Войти</Link>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header;