import "./MoviesCard.css";
import save_btn from "../../images/save-icon.svg";
import saved_btn from "../../images/saved-icon.svg";
import delete_movie from "../../images/delete-movie.svg";
import movie_img from "../../images/film.png";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const MoviesCard = () => {
  const [isSaved, setIsSaved] = useState(true);
  const { pathname } = useLocation();
  const isMoviesPage = pathname === '/movies';
  const savedBtn = isSaved ? saved_btn : save_btn;
  const moviesCardBtn = isMoviesPage ? savedBtn : delete_movie;

  return(
    <div className="moviesCard">
      <img className="movieCard__img" src={movie_img} alt="Постер фильма" />
      <div className="movieCard__flex">
        <div className="moviesCard__description">
          <h3 className="moviesCard__title">33 слова о дизайне</h3>
          <p className="moviesCard__duration">1ч42м</p>
        </div>
        <button type="button" className="button moviesCard__btn">
          <img src={moviesCardBtn} alt="Иконка добавления в избранное или удаления" />
        </button>
      </div>
    </div>
  )
};

export default MoviesCard;