import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <main>
      <section className="notFoundPage">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <button className="button notFoundPage__link" onClick={handleClick}>
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFoundPage;
