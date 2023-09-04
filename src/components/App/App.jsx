import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Routes>
      <Route element={<Header loggedIn={loggedIn} />}>
        <Route index element={<Main />} />
        <Route path='movies' element={<Movies />} />
        <Route path='saved-movies' element={<SavedMovies />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
