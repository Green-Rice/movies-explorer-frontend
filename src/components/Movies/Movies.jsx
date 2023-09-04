import Footer from "../Footer/Footer";
import MoreButton from '../MoreButton/MoreButton';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  return(
    <>
      <main>
        <section>
          <SearchForm />
          <MoviesCardList />
          <MoreButton />
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Movies;