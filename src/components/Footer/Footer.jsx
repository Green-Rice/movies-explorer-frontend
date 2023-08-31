import "./Footer.css";

const Footer = () => {
  return(
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__line" />
      <div className="footer__flex">
        <p className="footer__copyright">
          &#169; 2020
        </p>
        <div className="footer__yandex">
          <p className="footer__text">
            Яндекс.Практикум
          </p>
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
  )
}

export default Footer;