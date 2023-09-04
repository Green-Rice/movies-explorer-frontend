import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  return(
    <>
      <main>
        <section>
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;