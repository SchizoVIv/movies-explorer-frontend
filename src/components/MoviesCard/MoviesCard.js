import './MoviesCard.css';
import { React, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  minInHours,
} from '../../utils/constants';

function MoviesCard(props) {
  const user = useContext(CurrentUserContext);
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies') {
      console.log('local')
      console.log(JSON.parse(localStorage.getItem('savedMoviesList')))
      console.log(JSON.parse(localStorage.getItem('savedMoviesList')))
      const isSavedCheck = props.savedMovieList.some(
        i => i.movieId === props.movie.id && i.owner === user.currentUser._id
      );
      if (isSavedCheck) {
        props.allMovies.forEach(element => setIsSaved(true));
      }
    }
  }, [location.pathname]);

  function getTime(duration) {
    let hours = Math.trunc(duration / minInHours);
    let minutes = duration % minInHours;
    return `${hours ? hours + 'ч ' : ''}${minutes ? minutes + 'м' : ''}`;
  }

// __________________________________________________________ клик/сохранение
  function handleClick() {
    if (!isSaved) {
      const movieToSave = props.savedMovieList.find(
        el => (el.movie ? el.movie.movieId : el.movieId) === props.movie.id
      );
      props.onMovieClick(props.movie || movieToSave.movie, setIsSaved);
    }

    if (isSaved) {
      const movieToDelete = props.savedMovieList.find(
        el => (el.movie ? el.movie.movieId : el.movieId) === props.movie.id
      );
      props.onMovieDelete(
        movieToDelete.movie ? movieToDelete.movie._id : movieToDelete._id,
        setIsSaved
      );
    }
  }

// _________________________________________________________ клик/удаление
  function handleDelete() {
    props.onMovieDelete(props.movie._id);
  }


  const saveBtnClass = `element__button-favorite ${isSaved ? 'element__button-favorite_active' : ''}
  ${location.pathname === '/saved-movies' ? 'element__button-delete' : ''}`;

  return (
    <div className="element">
      <a
        href={props.movie.trailerLink}
        className="element__link"
        rel="noreferrer noopener"
      >
        <img
          className="element__image"
          alt={location.pathname === '/saved-movies' ? props.movie.nameRU : props.movie.image.name}
          src={
            location.pathname === '/saved-movies'
              ? props.movie.image
              : `https://api.nomoreparties.co/${props.movie.image.url}`
          }
        />
      </a>
      <div className="element__box">
        <div className="element__block-of-text">
          <h2 className="element__title">
            {props.movie.nameRU}
          </h2>
          <p className="element__time">
            {getTime(props.movie.duration)}
          </p>
        </div>
        <button
          value={{ isSaved }}
          onClick={location.pathname === '/saved-movies' ? handleDelete : handleClick}
          className={saveBtnClass}
          aria-label="save"
          type="button"
          disabled={props.isLoading ? true : false}
        ></button>
        </div>
    </div>
  );
}

export default MoviesCard;

