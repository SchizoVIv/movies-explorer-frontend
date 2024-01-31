import "./Movies.css";
import { React, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from '../Preloader/Preloader';
import {

  SCRIN_320,
  SCRIN_1240,
  SCRIN_1239,
  SCRIN_910,
  SCRIN_909,
  SCRIN_769,
  SCRIN_768,

  GRID_CARD_16,
  GRID_CARD_15,
  GRID_CARD_12,
  GRID_CARD_5,
  GRID_CARD_8,
} from "../../utils/constants.js"

function Movies(props) {

  // ________________________________________________ кнопка "еще"
  const windowChange = () => props.windowSizeResize ? props.windowSize[0].width : props.windowSize[0];

  const loadMore = () => {
    if (windowChange() >= SCRIN_1239) {
      props.setMoviesPage(props.moviesPage + 4);
    }
    if (windowChange() <= SCRIN_1239) {
      props.setMoviesPage(props.moviesPage + 3);
    }
    if (windowChange() <= SCRIN_909) {
      props.setMoviesPage(props.moviesPage + 2);
    }
    if (windowChange() <= SCRIN_768) {
      props.setMoviesPage(props.moviesPage + 2);
    }
  };

  useEffect(() => {
    if (props.currentMoviePage.length === props.allMovies.length) {
      props.setReadLess(true);
    } else {
      props.setReadLess(false);
    }
  }, [props.readLess, props.currentMoviePage.length, props.allMovies.length]);

  // _______________________________ расстановка рядов с карточками

  useEffect(() => {
    if (props.windowSize[0] >= SCRIN_1240) {
      props.setMoviesPage(GRID_CARD_16);
    }
    if (props.windowSize[0] <= SCRIN_1239 && props.windowSize[0] >= SCRIN_910) {
      props.setMoviesPage(GRID_CARD_15);
    }
    if (props.windowSize[0] <= SCRIN_909 && props.windowSize[0] >= SCRIN_769) {
      props.setMoviesPage(GRID_CARD_8);
    }
    if (props.windowSize[0] <= SCRIN_768 && props.windowSize[0] >= SCRIN_320) {
      props.setMoviesPage(GRID_CARD_5);
    }
  }, [props.windowSize, localStorage.getItem('query')]);

  return (
    <main className="main">
      {props.isLoading ? <Preloader /> : ''}
      <Header />
      <section className="movies">
        <SearchForm
          setMovies={props.setMovies}
          setSavedMovieList={props.setSavedMovieList}
          handleSearchQuery={props.handleSearchQuery}
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
          isChecked={props.isChecked}
          setIsChecked={props.setIsChecked}
          errors={props.errors}
          infoMessage={props.infoMessage}
          isLoading={props.isLoading}
        />
        <MoviesCardList
          loadMore={loadMore}
          onMovieClick={props.onMovieClick}
          onMovieDelete={props.onMovieDelete}
          allMovies={props.allMovies}
          movieIsNotFound={props.movieIsNotFound}
          currentMoviePage={props.currentMoviePage}
          readLess={props.readLess}
          savedMovieList={props.savedMovieList}
          setErrors={props.setErrors}
          isLoading={props.isLoading}
        />
      </section>
      <Footer/>
    </main>
  );
}

export default Movies;

