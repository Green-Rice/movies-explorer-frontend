import { MOVIE_CHECKBOX_KEY } from '../localStorage';

export const getCheckboxValue = () =>
  localStorage.getItem(MOVIE_CHECKBOX_KEY) === 'true';
