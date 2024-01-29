import "./Movies.css";
import { React, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Preloader from '../Preloader/Preloader';
import {
  SCRIN_1279,
  SCRIN_1278,
  SCRIN_990,
  SCRIN_707,
  SCRIN_320,
  GRID_ROW_2,
  GRID_ROW_3,
  GRID_ROW_4,
  GRID_ROW_5,
} from "../../utils/constants.js"

function Movies(props) {

  // ________________________________________________ кнопка "еще"
  const windowChange = () => props.windowSizeResize ? props.windowSize[0].width : props.windowSize[0];

  const loadMore = () => {
    if (windowChange() >= SCRIN_1279) {
      props.setMoviesPage(props.moviesPage + 4);
    }
    if (windowChange() <= SCRIN_1278) {
      props.setMoviesPage(props.moviesPage + 3);
    }
    if (windowChange() <= SCRIN_990) {
      props.setMoviesPage(props.moviesPage + 2);
    }
    if (windowChange() <= SCRIN_707) {
      props.setMoviesPage(props.moviesPage + 1);
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
    if (props.windowSize[0] >= SCRIN_1279) {
      props.setMoviesPage(GRID_ROW_4);
    }
    if (props.windowSize[0] <= SCRIN_1278 && props.windowSize[0] >= SCRIN_990) {
      props.setMoviesPage(GRID_ROW_3);
    }
    if (props.windowSize[0] <= SCRIN_990 && props.windowSize[0] >= SCRIN_707) {
      props.setMoviesPage(GRID_ROW_2);
    }
    if (props.windowSize[0] <= SCRIN_707 && props.windowSize[0] >= SCRIN_320) {
      props.setMoviesPage(GRID_ROW_5);
    }
  }, [props.windowSize]);

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

