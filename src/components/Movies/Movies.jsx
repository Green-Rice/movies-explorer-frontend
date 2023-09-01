import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
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

export default Movies;