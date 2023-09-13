import { useContext } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';

const SavedMovies = ({ onDeleteMovie }) => {
  const savedMoviesFromServer = useContext(SavedMoviesContext);
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        movies={savedMoviesFromServer}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
};

export default SavedMovies;
