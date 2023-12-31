import { BEATFILM_MOVIES } from '../url';

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    return Promise.reject(err);
  });
};

export const getMovies = async () => {
  try {
    const res = await fetch(`${BEATFILM_MOVIES}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await checkAnswer(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
