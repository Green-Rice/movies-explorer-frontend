import "./Portfolio.css";

const Portfolio = () => {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__list">
        <li>
          <a
            href="https://github.com/Green-Rice/how-to-learn"
            className="link portfolio__project"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__projectName">Статичный сайт</h3>
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__line" />
        <li>
          <a
            href="https://green-rice.github.io/russian-travel/"
            className="link portfolio__project"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__projectName">Адаптивный сайт</h3>
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__line"></li>
        <li>
          <a
            href="https://github.com/Green-Rice/react-mesto-api-full-gha"
            className="link portfolio__project"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__projectName">Одностраничное приложение</h3>
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;