import { getToken } from '../helpers/getToken';
import { BEATFILM_MOVIES, MAIN_API_URL } from '../url';

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    return Promise.reject({ ...err, status: res.status });
  });
};

export const signUp = async ({ name, email, password }) => {
  try {
    const res = await fetch(`${MAIN_API_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const res = await fetch(`${MAIN_API_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUser = async (token) => {
  try {
    const res = await fetch(`${MAIN_API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUser = async ({ name, email }) => {
  try {
    const res = await fetch(`${MAIN_API_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ name, email }),
    });

    const data = checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSavedMovies = async () => {
  try {
    const res = await fetch(`${MAIN_API_URL}/movies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addSavedMovies = async (movie) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id: movieId,
    nameRU,
    nameEN,
  } = movie;
  try {
    const res = await fetch(`${MAIN_API_URL}/movies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: BEATFILM_MOVIES + image.url,
        trailerLink,
        thumbnail: BEATFILM_MOVIES + image.formats.thumbnail.url,
        movieId,
        nameRU,
        nameEN,
      }),
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const deleteSavedMovies = async (movie) => {
  try {
    const res = await fetch(`${MAIN_API_URL}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
