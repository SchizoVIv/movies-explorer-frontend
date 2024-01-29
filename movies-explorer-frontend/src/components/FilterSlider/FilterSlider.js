import './FilterSlider.css';
import { React } from 'react';
import { useLocation } from 'react-router-dom';

function FilterSlider(props) {
  const location = useLocation();

  const handleChange = event => {
    if (location.pathname === '/movies') {
      event.preventDefault();
      props.setIsChecked(event.target.checked);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    if (location.pathname === '/movies') {
      props.handleSearchQuery({ query: JSON.parse(localStorage.getItem('query')) }, e.target.checked);
    }
  }
  return (
    <div>
      <div className="slider__line">
        <label className="slider__box">
          <input
            className="slider__input"
            type="checkbox"
            disabled={props.isLoading ? true : false}
            checked={location.pathname === '/movies' ? props.isChecked : props.checkbox}
            onChange={handleChange}
            onClick={
              location.pathname === '/movies'
                ? handleClick
                : e => {
                    props.setCheckbox(e.target.checked);
                  }
            }
          ></input>
        <span className="slider__switch"></span>
        <span className="search-form__slider-text">
          Короткометражка
        </span>
        </label>
      </div>
    </div>
  );
}

export default FilterSlider;
