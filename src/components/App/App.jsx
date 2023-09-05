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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Routes>
      <Route element={<Header loggedIn={loggedIn} />}>
        <Route element={<Footer />}>
          <Route index element={<Main />} />
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
        </Route>
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='signup' element={<Register />} />
      <Route path='signin' element={<Login />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
