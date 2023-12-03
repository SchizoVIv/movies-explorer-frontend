import { useState } from 'react';
import "./SearchForm.css"
import React from "react"
import magnifier from "../../images/magnifier.svg"
function SearchForm() {
  const [slider, setSlider] = useState(true);
  function clickSlider(e) {
    e.preventDefault();
    console.log('Была нажата кнопка.');
    setSlider(!slider);
  }
  return (
      <div className="search-form">
        <div className="search-form__conteiner">
          <div className="search-form__box">
            <img className="search-form__magnifier" src={magnifier} alt="magnifier" />
            <input
              className="search-form__input"
              type="search"
              placeholder="Фильм"
              fontSize="18px"
              color="#A0A0A0"
            />
            <div className="search-form__block-of-buttons"><button className="search-form__button-search" /></div>
          </div>
          <div className="search-form__line">
            <label className="search-form__slider-box">
              <input
                className="search-form__slider-input"
                type="checkbox"
              ></input>
              <span
                onClick={clickSlider}
                className={slider ? ['search-form__slider-switch search-form__slider-switch_active'] : ['search-form__slider-switch']}></span>
            </label>
            <span
              className="search-form__slider-text"
            >Короткометражки</span>
          </div>
        </div>
      </div>
  )
}

export default SearchForm;
