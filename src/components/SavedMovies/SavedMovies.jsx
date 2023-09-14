import { useContext, useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import { getSearchedMovies } from '../../utils/helpers/getSearchedMovies';
import { getCheckboxedMovies } from '../../utils/helpers/getCheckboxedMovies';

const SavedMovies = ({ onDeleteMovie }) => {
  const savedMoviesFromServer = useContext(SavedMoviesContext);
  const [movieSearchData, setMovieSearchData] = useState({
    name: '',
    checkbox: false,
  });
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(
    savedMoviesFromServer
  );

  const handleSearchMovies = (movieName, checkbox) => {
    setMovieSearchData((prevState) => ({
      ...prevState,
      name: movieName,
      checkbox,
    }));
    let filteredMovie = getSearchedMovies(savedMoviesFromServer, movieName);

    if (checkbox) {
      filteredMovie = getCheckboxedMovies(filteredMovie);
    }

    setFilteredSavedMovies(filteredMovie);
  };

  useEffect(() => {
    handleSearchMovies(movieSearchData.name, movieSearchData.checkbox);
  }, [savedMoviesFromServer]);

  return (
    <main>
      <SearchForm onSubmit={handleSearchMovies} />
      <MoviesCardList
        movies={filteredSavedMovies}
        onDeleteMovie={onDeleteMovie}
        moviesFromServer={savedMoviesFromServer}
      />
    </main>
  );
};

export default SavedMovies;
