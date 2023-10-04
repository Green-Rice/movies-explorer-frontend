import './AboutMe.css';
import photo from '../../../images/photo.png';

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe__container">
        <h2 className="aboutMe__title">Обо мне</h2>
        <div className="aboutMe__line" />
        <ul className="list aboutMe__container-list">
          <li className="aboutMe__item">
            <div className="aboutMe__info">
              <h3 className="aboutMe__name">Алексей</h3>
              <h4 className="aboutMe__about">Frontend developer мне  29 лет</h4>
              <p className="aboutMe__description">
              Я родился в Cибири, а живу на юге, в Ставрополе. Закончил факультет Юриспруденции РАНХиГС. У
                меня есть жена и двое котов. Я люблю слушать музыку, а ещё увлекаюсь
                бегом и люблю путешествовать на машине. С 2016 года я начал кодить, сейчас работаю программистом в небольшой компании. Еще иногда занимаюсь фрилансом!
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
