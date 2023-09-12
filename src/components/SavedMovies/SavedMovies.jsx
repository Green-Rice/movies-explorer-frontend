import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={[]} />
    </main>
  );
};

export default SavedMovies;
