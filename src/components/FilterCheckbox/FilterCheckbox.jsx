import { useEffect, useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ onChecked, movieCheckbox }) => {
  const [value, setValue] = useState(movieCheckbox);
  const handleChange = (e) => {
    setValue(e.target.checked);
    onChecked(e.target.checked);
  };

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          className="filterCheckbox__input"
          defaultChecked={value}
          value={value}
          onChange={handleChange}
        />
        <div className="filterCheckbox__slider"></div>
      </label>
      Короткометражки
    </div>
  );
};

export default FilterCheckbox;
