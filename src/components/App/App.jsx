import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';
import {
  addSavedMovies,
  deleteSavedMovies,
  getSavedMovies,
  getUser,
  signIn,
  signUp,
  updateUser,
} from '../../utils/api/mainApi';
import { getMovies } from '../../utils/api/moviesApi';
import { getCheckboxValue } from '../../utils/helpers/getCheckboxValue';
import { getCheckboxedMovies } from '../../utils/helpers/getCheckboxedMovies';
import { getSearchedMovies } from '../../utils/helpers/getSearchedMovies';
import { getToken } from '../../utils/helpers/getToken';
import { JWT, MOVIE_NAME_KEY } from '../../utils/localStorage';
import { ACCEPT_MESSAGES, ERROR_MESSAGES } from '../../utils/messages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Preloader from '../Preloader/Preloader';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesFromServer, setMoviesFromServer] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptMessage, setAcceptMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      handleGetUser(token);
      handleGetSavedMovies();
      const movieName = localStorage.getItem(MOVIE_NAME_KEY);
      if (movieName) {
        handleGetMovie(movieName, getCheckboxValue());
      }
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
    try {
      handleClearErrorMessage();
      let movies = moviesFromServer;
      let filteredMovies;
      setIsLoader(true);

      if (moviesFromServer.length === 0) {
        movies = await getMovies();
        setMoviesFromServer(movies);
      }
      filteredMovies = getSearchedMovies(movies, movieName);

      if (checkbox) {
        filteredMovies = getCheckboxedMovies(filteredMovies);
      }

      setFilteredMovies(filteredMovies);
    } catch (e) {
      setErrorMessage(ERROR_MESSAGES.MOVIES_SERVER_ERROR);
      console.log(e);
    }
    setIsLoader(false);
  };

  const handleSignUp = async (data) => {
    setIsLoader(true);
    try {
      handleClearErrorMessage();
      await signUp(data);
      handleSignIn({ email: data.email, password: data.password });
    } catch (e) {
      if (e.status === 409) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage(ERROR_MESSAGES.REGISTRATION_ERROR);
      }
      console.log(e);
    }
    setIsLoader(false);
  };

  const handleSignIn = async (data) => {
    setIsLoader(true);
    try {
      handleClearErrorMessage();
      const res = await signIn(data);
      localStorage.setItem(JWT, res.token);
      handleGetUser(res.token);
      setLoggedIn(true);
      navigate('movies');
      handleGetSavedMovies();
    } catch (e) {
      if (e.status === 401) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage(ERROR_MESSAGES.AUTHORIZATION_ERROR);
      }
      console.log(e);
    }
    setIsLoader(false);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.clear();
    setMoviesFromServer([]);
    setSavedMovies([]);
    setFilteredMovies([]);
    setErrorMessage('');
    setCurrentUser({ _id: '', name: '', email: '' });
  };

  const handleGetSavedMovies = async () => {
    try {
      const savedMovies = await getSavedMovies();
      setSavedMovies(savedMovies);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSaveMovie = async (movie) => {
    try {
      const addedMovieResolve = await addSavedMovies(movie);
      setSavedMovies((prevState) => [...prevState, addedMovieResolve]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteMovies = async (movie) => {
    try {
      const removedMovieResolve = await deleteSavedMovies(movie);
      setSavedMovies((prevState) =>
        prevState.filter((movie) => movie._id !== removedMovieResolve._id)
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateUser = async (newUser) => {
    setIsLoader(true);
    handleClearErrorMessage();
    try {
      const newUserResponse = await updateUser(newUser);
      console.log(newUserResponse);
      setCurrentUser(newUserResponse);
      setAcceptMessage(ACCEPT_MESSAGES.UPDATE_USER);
    } catch (e) {
      if (e.status === 409) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage(ERROR_MESSAGES.UPDATE_USER_ERROR);
      }
      console.log(e);
    }
    setIsLoader(false);
    setTimeout(() => {
      setAcceptMessage('');
    }, 3000);
  };

  const handleClearErrorMessage = () => {
    setErrorMessage('');
  };

  if (loadingPage) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <Routes>
          <Route element={<Header loggedIn={loggedIn} />}>
            <Route element={<Footer />}>
              <Route index element={<Main />} />
              <Route
                path="movies"
                element={
                  <ProtectedRoute
                    component={Movies}
                    loggedIn={loggedIn}
                    onSubmit={handleGetMovie}
                    moviesFromServer={moviesFromServer}
                    filteredMovies={filteredMovies}
                    isLoader={isLoader}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovies}
                    errorMessage={errorMessage}
                    onClearMessage={handleClearErrorMessage}
                  />
                }
              />
              <Route
                path="saved-movies"
                element={
                  <ProtectedRoute
                    component={SavedMovies}
                    loggedIn={loggedIn}
                    onDeleteMovie={handleDeleteMovies}
                    isLoader={isLoader}
                  />
                }
              />
            </Route>
            <Route
              path="profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  loggedIn={loggedIn}
                  onSignOut={handleSignOut}
                  onSubmit={handleUpdateUser}
                  isLoader={isLoader}
                  errorMessage={errorMessage}
                  onClearMessage={handleClearErrorMessage}
                  acceptMessage={acceptMessage}
                />
              }
            />
          </Route>
          <Route
            path="signup"
            element={
              <Register
                loggedIn={loggedIn}
                onSubmit={handleSignUp}
                errorMessage={errorMessage}
                onClearMessage={handleClearErrorMessage}
                isLoader={isLoader}
              />
            }
          />
          <Route
            path="signin"
            element={
              <Login
                loggedIn={loggedIn}
                onSubmit={handleSignIn}
                errorMessage={errorMessage}
                onClearMessage={handleClearErrorMessage}
                isLoader={isLoader}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
