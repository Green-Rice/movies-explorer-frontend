import "./NotFoundPage.css";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return(
    <main>
      <section className="notFoundPage">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <Link className="link notFoundPage__link" to="/">Назад</Link>
      </section>
    </main>
  )
};

export default NotFoundPage;