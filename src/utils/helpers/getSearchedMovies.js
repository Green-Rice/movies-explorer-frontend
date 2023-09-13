export const getSearchedMovies = (movies, movieName) =>
  movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(movieName) ||
      movie.nameEN.toLowerCase().includes(movieName)
  );
