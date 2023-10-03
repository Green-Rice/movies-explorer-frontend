import './AboutMe.css';
import photo from '../../../images/photo.png';

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe__container">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__line" />
        <ul className="list aboutMe__container-list">
          <li className="aboutMe__item">
            <div className="aboutMe__info">
              <h3 className="aboutMe__name">Виталий</h3>
              <h4 className="aboutMe__about">Фронтенд-разработчик, 30 лет</h4>
              <p className="aboutMe__description">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб&#8209;разработке,
                начал заниматься фриланс&#8209;заказами и ушёл с постоянной
                работы.
              </p>
            </div>
            <a
              className="link aboutMe__link"
              href="https://github.com/Green-Rice"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="aboutMe__item">
            <img src={photo} className="aboutMe__img" alt="Фотография" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
