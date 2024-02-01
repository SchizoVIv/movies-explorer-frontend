import "./Movies.css";
import { React, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from '../Preloader/Preloader';
import {
  SCRIN_TAB_MAX,
  SCRIN_PL_MAX,
  SCRIN_PL_MIN,
  SCRIN_MOB_MIN,


  GRID_CARD_16,
  GRID_CARD_12,
  GRID_CARD_5,
  GRID_CARD_8,
  GRID_ROW_2,
  GRID_ROW_3,
  GRID_ROW_4,
} from "../../utils/constants.js"

function Movies(props) {

  // ________________________________________________ кнопка "еще"
  const windowChange = () => props.windowSizeResize ? props.windowSize[0].width : props.windowSize[0];

  const loadMore = () => {
    if (windowChange() >= SCRIN_TAB_MAX) {
      props.setMoviesPage(props.moviesPage + GRID_ROW_4);
    }
    if (windowChange() < SCRIN_TAB_MAX && windowChange() >= SCRIN_PL_MAX) {
      props.setMoviesPage(props.moviesPage + GRID_ROW_3);
    }
    if (windowChange() < SCRIN_PL_MAX && windowChange() >= SCRIN_PL_MIN) {
      props.setMoviesPage(props.moviesPage + GRID_ROW_2);
    }
    if (windowChange() < SCRIN_PL_MIN) {
      props.setMoviesPage(props.moviesPage + GRID_ROW_2);
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
    if (props.windowSize[0] >= SCRIN_TAB_MAX) {
      props.setMoviesPage(GRID_CARD_16);
    }
    if (props.windowSize[0] < SCRIN_TAB_MAX && props.windowSize[0] >= SCRIN_PL_MAX) {
      props.setMoviesPage(GRID_CARD_12);
    }
    if (props.windowSize[0] < SCRIN_PL_MAX && props.windowSize[0] >= SCRIN_PL_MIN) {
      props.setMoviesPage(GRID_CARD_8);
    }
    if (props.windowSize[0] < SCRIN_PL_MIN && props.windowSize[0] >= SCRIN_MOB_MIN) {
      props.setMoviesPage(GRID_CARD_5);
    }
  }, [props.windowSize, localStorage.getItem('query'), props.isLoading, window.innerWidth]);

  return (
    <>
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
            moviesPage={props.moviesPage}
          />
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;

