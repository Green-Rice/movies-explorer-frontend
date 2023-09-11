import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  return(
    <main>
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </main>
  )
};

export default Movies;