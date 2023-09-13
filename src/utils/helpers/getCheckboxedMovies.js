export const getCheckboxedMovies = (movies) =>
  movies.filter((movie) => movie.duration <= 40);
