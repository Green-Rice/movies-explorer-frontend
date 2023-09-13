import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { getMovies } from '../../utils/api/moviesApi';
import { getUser, signIn, signUp } from '../../utils/api/mainApi';
import {
  JWT,
  MOVIE_CHECKBOX_KEY,
  MOVIE_NAME_KEY,
} from '../../utils/localStorage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import { getToken } from '../../utils/helpers/getToken';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Preloader from '../Preloader/Preloader';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      handleGetUser(token);
    } else {
      setLoadingPage(false);
    }
  }, []);

  const handleGetUser = async (token) => {
    try {
      const user = await getUser(token);
      setCurrentUser(user);
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
    setLoadingPage(false);
  };

  const handleGetMovie = async (movieName, checkbox) => {
    let filteredMovies;
    setIsLoader(true);
    const moviesFromServer = await getMovies();
    filteredMovies = moviesFromServer.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(movieName) ||
        movie.nameEN.toLowerCase().includes(movieName)
    );

    if (checkbox) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    setFilteredMovies(filteredMovies);
    setIsLoader(false);
    console.log(filteredMovies);
  };

  const handleSignUp = async (data) => {
    try {
      await signUp(data);
      handleSignIn({ email: data.email, password: data.password });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignIn = async (data) => {
    try {
      const res = await signIn(data);
      localStorage.setItem(JWT, res.token);
      handleGetUser(res.token);
      setLoggedIn(true);
      navigate('movies');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem(JWT);
    localStorage.removeItem(MOVIE_CHECKBOX_KEY);
    localStorage.removeItem(MOVIE_NAME_KEY);
  };

  if (loadingPage) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route element={<Header loggedIn={loggedIn} />}>
          <Route element={<Footer />}>
            <Route index element={<Main />} />
            <Route
              path="movies"
              element={
                <PrivateRoute
                  component={Movies}
                  loggedIn={loggedIn}
                  onSubmit={handleGetMovie}
                  onGetMovies={handleGetMovie}
                  filteredMovies={filteredMovies}
                  isLoader={isLoader}
                />
              }
            />
            <Route path="saved-movies" element={<SavedMovies />} />
          </Route>
          <Route
            path="profile"
            element={
              <PrivateRoute
                component={Profile}
                loggedIn={loggedIn}
                onSignOut={handleSignOut}
              />
            }
          />
        </Route>
        <Route
          path="signup"
          element={<Register loggedIn={loggedIn} onSubmit={handleSignUp} />}
        />
        <Route
          path="signin"
          element={<Login loggedIn={loggedIn} onSubmit={handleSignIn} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
