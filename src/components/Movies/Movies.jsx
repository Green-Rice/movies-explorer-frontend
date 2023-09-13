import { useEffect, useState } from 'react';
import { MOVIE_CHECKBOX_KEY, MOVIE_NAME_KEY } from '../../utils/localStorage';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { getCheckboxValue } from '../../utils/helpers/getCheckboxValue';

const Movies = ({ onSubmit, filteredMovies, isLoader, onGetMovies }) => {
  const movieName = localStorage.getItem(MOVIE_NAME_KEY);
  const movieCheckbox = getCheckboxValue();

  const [widthScreen, setWidthScreen] = useState(window.screen.width);
  const [moviesCount, setMoviesCount] = useState(0);
  const [movies, setMovies] = useState(filteredMovies);
  const hasMovies = filteredMovies.length > movies.length;

  const handleChangeWidthScreen = () => {
    setWidthScreen(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangeWidthScreen);

    return () => window.removeEventListener('resize', handleChangeWidthScreen);
  }, []);

  useEffect(() => {
    if (widthScreen > 800) setMoviesCount(16);
    if (widthScreen < 800) setMoviesCount(8);
    if (widthScreen < 500) setMoviesCount(5);
  }, [widthScreen]);

  useEffect(() => {
    setMovies(filteredMovies.slice(0, moviesCount));
  }, [filteredMovies, moviesCount]);

  const handleSubmit = (value, checkbox) => {
    localStorage.setItem(MOVIE_NAME_KEY, value);
    localStorage.setItem(MOVIE_CHECKBOX_KEY, checkbox);
    onSubmit(value, checkbox);
  };

  const handleAddMovies = () => {
    if (widthScreen > 800)
      setMovies(filteredMovies.slice(0, movies.length + 4));
    if (widthScreen < 800)
      setMovies(filteredMovies.slice(0, movies.length + 2));
    if (widthScreen < 500)
      setMovies(filteredMovies.slice(0, movies.length + 2));
  };

  return (
    <main>
      <SearchForm
        movieName={movieName}
        movieCheckbox={movieCheckbox}
        onSubmit={handleSubmit}
      />
      <MoviesCardList movies={movies} isLoader={isLoader} />
      {hasMovies && <MoreButton onClick={handleAddMovies} />}
    </main>
  );
};

export default Movies;
