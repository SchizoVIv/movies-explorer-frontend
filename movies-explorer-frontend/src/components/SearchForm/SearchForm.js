import "./SearchForm.css";
import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import magnifier from "../../images/magnifier.svg"
import FilterSlider from '../FilterSlider/FilterSlider';

function SearchForm(props) {

  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    shouldFocusError: true,
    delayError: 0,
    criteriaMode: 'all',
    defaultValues: {
      search_query: props.searchQuery
    }
  });

  function onSubmit(data) {
    if (location.pathname === '/saved-movies') {
      props.handleSaveSearch(data.search_query);
    } else {
      props.handleSearchQuery({query: data.search_query}, props.isChecked);
    }
  }

  return (
    <div className="search-form">
      <div className="search-form__conteiner">
        <form
          className="search-form__box search-form__container_cf"
          onSubmit={handleSubmit(onSubmit)}
          id="search-form"
        >
          <img
            className="search-form__magnifier"
            src={magnifier}
            alt="magnifier" />
          <input
            className="search-form__input"
            disabled={props.isLoading ? true : false}
            type="search"
            placeholder="Фильм"
            name="search_query"
            {...register('search_query', { required: {
                value: true,
                message: 'Введите ключевое слово'
              }
            })}
          ></input>
          <div className="search-form__block-of-buttons">
            <button
              className="search-form__button-search link-hover"
              type="submit"
              disabled={props.isLoading ? true : false}
            ></button>
          </div>
        </form>
        <div className="search-form__dividing-line"></div>
        <FilterSlider
          handleSearchQuery={props.handleSearchQuery}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
          setMovies={props.setMovies}
          setSavedMovieList={props.setSavedMovieList}
          isLoading={props.isLoading}
          handleSavedMoviesSearch={props.handleSavedMoviesSearch}
          checkbox={props.checkbox}
          setCheckbox={props.setCheckbox}
        />
      </div>
      {props.infoMessage && <span className="search-form__info">
        {props.infoMessage}
      </span>}
      {props.errors && <span className="search-form__error">
        {props.errors}
      </span>}
      {errors.search_query && (
        <span
          className="search-form__error">
            {errors.search_query.message}
        </span>
      )}
    </div>
  );
}

export default SearchForm;
