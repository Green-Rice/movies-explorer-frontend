import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  const {pathname} = useLocation();
  const isMoviesPage = pathname === '/movies';

  return(
    <section className="movieCardList">
      <ul className="list movieCardList__list">
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
      </ul>
      {isMoviesPage && <button type="button" className="button movieCardList__btn">Ещё</button>}
      <Preloader />
    </section>
  )
};

export default MoviesCardList;