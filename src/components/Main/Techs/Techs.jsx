import './Techs.css';

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__line" />
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">

        </p>
        <div className="techs__container-list">
          <ul className="list techs__list">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
