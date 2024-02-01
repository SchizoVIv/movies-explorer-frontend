import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { React } from 'react';
import { useLocation } from 'react-router-dom';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import {
  durationShort,
} from '../../utils/constants';

function MoviesCardList(props) {

  const location = useLocation();

  if (location.pathname === '/movies' && props.movieIsNotFound) {
    return (
      <div className="elements-not-found">
        <p className="elements-not-found__text">
          По вашему запросу ничего не найдено, введите новое ключевое слово в поисковую строку
        </p>
      </div>
    );
  }

  console.log(props.moviesPage)
  if (location.pathname === '/movies' && !props.movieIsNotFound) {
    return (
      <main className='main'>
        <div className="elements" >
        {props.allMovies.slice(0, props.moviesPage).map((movie, key) => {
          // {props.currentMoviePage.map((movie, key) => {
            return (
              <MoviesCard
                onMovieClick={props.onMovieClick}
                onMovieDelete={props.onMovieDelete}
                movie={movie}
                key={movie.id}
                allMovies={props.allMovies}
                savedMovieList={props.savedMovieList}
                setErr={props.setErr}
                isLoading={props.isLoading}
              />
            );
          })}
        </div>
        <ShowMoreButton
          readLess={props.readLess}
          onShowMore={props.loadMore}
          movieIsNotFound={props.movieIsNotFound}
        />
      </main>
    );
  }
  if (location.pathname === '/saved-movies') {
    const render = () => {
      if (!props.savedQuery && !props.checkbox) {
        return props.savedMovieList.map((movie, key) => {
          return <MoviesCard
            movie={movie}
            key={movie._id}
            onMovieDelete={props.onMovieDelete}
            />;
        });
      } else if (!props.savedQuery && props.checkbox) {
        return props.savedMovieList
          .filter(shortMovie => shortMovie.duration <= durationShort)
          .map((movie, key) => {
            return <MoviesCard
              movie={movie}
              key={movie._id}
              onMovieDelete={props.onMovieDelete}
              />;
          });
      } else if (props.savedQuery && !props.checkbox) {
        return props.savedMovieList
          .filter(
            movie =>
              movie.nameRU.toLowerCase().includes(props.savedQuery.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(props.savedQuery.toLowerCase())
          )
          .map((movie, key) => {
            return <MoviesCard
              movie={movie}
              key={movie._id}
              onMovieDelete={props.onMovieDelete}
              />;
          });
      } else if (props.savedQuery && props.checkbox) {
        return props.savedMovieList
          .filter(
            movie =>
              movie.nameRU.toLowerCase().includes(props.savedQuery.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(props.savedQuery.toLowerCase())
          )
          .filter(shortMovie => shortMovie.duration <= durationShort)
          .map((movie, key) => {
            return <MoviesCard
              movie={movie}
              key={movie._id}
              onMovieDelete={props.onMovieDelete}
              />;
          });
      } else {
        return props.savedMovieList.map((movie, key) => {
          return <MoviesCard
            movie={movie}
            key={movie._id}
            onMovieDelete={props.onMovieDelete}
            />;
        });
      }
    };

    return (
      <main className='main'>
        <div className="elements">
          {render()}
        </div>
      </main>
    );
  }
}

export default MoviesCardList;
