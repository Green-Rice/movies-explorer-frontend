export const getSearchedMovies = (movies, movieName) =>
  movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(movieName.toLowerCase())
  );
