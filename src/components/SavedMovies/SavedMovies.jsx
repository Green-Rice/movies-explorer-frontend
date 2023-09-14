import { useContext, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import { getSearchedMovies } from '../../utils/helpers/getSearchedMovies';
import { getCheckboxedMovies } from '../../utils/helpers/getCheckboxedMovies';

const SavedMovies = ({ onDeleteMovie }) => {
  const savedMoviesFromServer = useContext(SavedMoviesContext);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(
    savedMoviesFromServer
  );

  const handleSubmit = (movieName, checkbox) => {
    let filteredMovie = getSearchedMovies(savedMoviesFromServer, movieName);

    if (checkbox) {
      filteredMovie = getCheckboxedMovies(filteredMovie);
    }

    setFilteredSavedMovies(filteredMovie);
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesCardList
        movies={filteredSavedMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
};

export default SavedMovies;
