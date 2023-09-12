import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { getMovies } from '../../utils/api/MoviesApi';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const handleGetMovie = async (value) => {
    setIsLoader(true);
    const moviesFromServer = await getMovies();
    const filteredMovies = moviesFromServer.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(value) ||
        movie.nameEN.toLowerCase().includes(value)
    );
    setFilteredMovies(filteredMovies);
    setIsLoader(false);
    console.log(filteredMovies);
  };

  return (
    <Routes>
      <Route element={<Header loggedIn={loggedIn} />}>
        <Route element={<Footer />}>
          <Route index element={<Main />} />
          <Route
            path="movies"
            element={
              <Movies
                onSubmit={handleGetMovie}
                filteredMovies={filteredMovies}
                isLoader={isLoader}
              />
            }
          />
          <Route path="saved-movies" element={<SavedMovies />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="signup" element={<Register />} />
      <Route path="signin" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
