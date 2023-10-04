import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="aboutProject" id="aboutProject">
      <div className="content">
        <h2 className="aboutProject__title">Немного о проекте</h2>
        <div className="aboutProject__line" />
        <ul className="list aboutProject__list">
          <li className="aboutProject__item">
            <h3 className="aboutProject__subtitle">
            Проект включал 5 этапов
            </h3>
            <p className="aboutProject__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="aboutProject__item">
            <h3 className="aboutProject__subtitle">
            На выполнение ушло 5 недель
            </h3>
            <p className="aboutProject__description">
            Проект продолжает изменяться. По мере времени и возможностей происходит рефакторинг и вносятся изменения.
            </p>
          </li>
        </ul>
        <ul className="list aboutProject__scale">
          <li className="aboutProject__backend">
            <div className="aboutProject__scale-backend">1 неделя</div>
            <p className="aboutProject__scale-subtitle">Back-end</p>
          </li>
          <li className="aboutProject__frontend">
            <div className="aboutProject__scale-frontend">4 недели</div>
            <p className="aboutProject__scale-subtitle">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;
