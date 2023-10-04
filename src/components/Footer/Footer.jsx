import { Outlet } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className="footer content">
        <h3 className="footer__title">
        Проект портфолио х BeatFilm.
        </h3>
        <div className="footer__line" />
        <div className="footer__flex">
          <p className="footer__copyright">&#169; 2023</p>
          <div className="footer__yandex">
            <a
              className="link"
              href="https://github.com/yandex-praktikum"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
