import './MoviesCard.css';
import save_btn from '../../images/save-icon.svg';
import saved_btn from '../../images/saved-icon.svg';
import delete_movie from '../../images/delete-movie.svg';
import movie_img from '../../images/film.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getMovieDuration } from '../../utils/helpers/getMovieDuration';
import { BEATFILM_MOVIES } from '../../utils/url';

const MoviesCard = ({ movie }) => {
  const [isSaved, setIsSaved] = useState(true);
  const { pathname } = useLocation();
  const isMoviesPage = pathname === '/movies';
  const savedBtn = isSaved ? saved_btn : save_btn;
  const moviesCardBtn = isMoviesPage ? savedBtn : delete_movie;
  const movieImg = `${BEATFILM_MOVIES}${movie.image.url}`;

  return (
    <div className="moviesCard">
      <a
        className="link movieCard__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movieCard__img" src={movieImg} alt="Постер фильма" />
      </a>
      <div className="movieCard__flex">
        <div className="moviesCard__description">
          <h3 className="moviesCard__title">{movie.nameRU}</h3>
          <p className="moviesCard__duration">
            {getMovieDuration(movie.duration)}
          </p>
        </div>
        <button type="button" className="button moviesCard__btn">
          <img
            src={moviesCardBtn}
            alt="Иконка добавления в избранное или удаления"
          />
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
