import './SearchForm.css';
import search from '../../images/search.svg';
import enter from '../../images/enter.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

const SearchForm = ({ movieName, onSubmit, movieCheckbox }) => {
  const [value, setValue] = useState(movieName);
  const [checked, setChecked] = useState(movieCheckbox);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    if (isError) {
      setIsError(false);
    }
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      setIsError(true);
    } else {
      onSubmit(value, checked);
    }
  };

  const handleChecked = (checkbox) => {
    setChecked(checkbox);
    onSubmit(value, checkbox);
  };

  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form
          className="searchForm__form"
          name="searchForm"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="searchForm__set">
            <label htmlFor="search" className="searchForm__label">
              <img
                className="searchForm__img"
                src={search}
                alt="Кнопка поиска"
              />
              <input
                type="text"
                className="searchForm__input"
                placeholder="Фильм"
                id="search"
                autoComplete="off"
                value={value}
                onChange={handleChange}
                required
              />
            </label>
            <span
              className={`searchForm__input-error ${
                isError && 'searchForm__input-error_active'
              }`}
            >
              Нужно ввести ключевое слово
            </span>
          </fieldset>
          <button className="button button_type_search">
            <img className="button__img" src={enter} alt="Начать поиск" />
          </button>
          <div className="searchForm__flex">
            <div className="searchForm__line" />
          </div>
        </form>
        <FilterCheckbox
          onChecked={handleChecked}
          movieCheckbox={movieCheckbox}
        />
      </div>
    </section>
  );
};

export default SearchForm;
