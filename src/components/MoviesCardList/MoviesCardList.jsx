import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, isLoader, onSaveMovie, onDeleteMovie }) => {
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

  return (
    <section className="movieCardList">
      <ul className="list movieCardList__list">{moviesList}</ul>
    </section>
  );
};

export default MoviesCardList;
