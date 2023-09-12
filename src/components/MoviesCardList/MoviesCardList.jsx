import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({ filteredMovies, isLoader }) => {
  const moviesList = filteredMovies.map((movie) => (
    <li key={movie.id}>
      <MoviesCard movie={movie} />
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
