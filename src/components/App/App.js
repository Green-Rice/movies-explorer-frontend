import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Routes>
      <Route element={<Header loggedIn={loggedIn} />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
