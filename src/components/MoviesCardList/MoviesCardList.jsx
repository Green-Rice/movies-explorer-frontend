import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  isLoader,
  onSaveMovie,
  onDeleteMovie,
  errorMessage,
  moviesFromServer,
}) => {
  const moviesList = movies.map((movie) => (
    <li key={movie.id || movie._id}>
      <MoviesCard
        movie={movie}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </li>
  ));

  if (isLoader) {
    return <Preloader />;
  }

  if (errorMessage) {
    return (
      <section className="movieCardList content">
        <p className="movieCardList__error">{errorMessage}</p>
      </section>
    );
  }

  if (moviesFromServer.length !== 0 && movies.length === 0) {
    return (
      <section className="movieCardList content">
        <p>Ничего не найдено!</p>
      </section>
    );
  }

  return (
    <section className="movieCardList content">
      <ul className="list movieCardList__list">{moviesList}</ul>
    </section>
  );
};

export default MoviesCardList;
