import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, isLoader }) => {
  const moviesList = movies.map((movie) => (
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
