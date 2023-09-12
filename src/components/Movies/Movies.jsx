import { MOVIE_NAME_KEY } from '../../utils/localStorage';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ onSubmit, filteredMovies, isLoader }) => {
  const movieName = localStorage.getItem(MOVIE_NAME_KEY);

  const handleSubmit = (value) => {
    localStorage.setItem(MOVIE_NAME_KEY, value);
    onSubmit(value);
  };

  return (
    <main>
      <SearchForm movieName={movieName} onSubmit={handleSubmit} />
      <MoviesCardList filteredMovies={filteredMovies} isLoader={isLoader} />
      <MoreButton />
    </main>
  );
};

export default Movies;
