import "./SearchForm.css";
import search from '../../images/search.svg'
import enter from "../../images/enter.svg";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return(
    <div className="searchForm">
      <div className="searchForm__container">
        <form className="searchForm__form" name="searchForm">
          <fieldset className="searchForm__set">
            <label htmlFor="search" className="searchForm__label">
              <img className="searchForm__img" src={search} alt="Кнопка поиска" />
              <input type="text" className="searchForm__input" placeholder="Фильм" id="search" required />
            </label>
          </fieldset>
          <button className="button button_type_search">
            <img className="button__img" src={enter} alt="Начать поиск" />
          </button>
          <div className="searchForm__flex">
            <div className="searchForm__line" />
          </div>
        </form>
        <FilterCheckbox />
      </div>
    </div>
  )
}

export default SearchForm;