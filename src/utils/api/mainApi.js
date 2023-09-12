import { JWT } from '../localStorage';
import { MAIN_API_URL } from '../url';

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    return Promise.reject(err);
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
