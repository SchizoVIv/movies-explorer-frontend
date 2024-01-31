import { React } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  return (
    
    <>
      {props.isLoading ? <Preloader /> : ''}
       <Header/>
      <section className="movies">
        <SearchForm
          handleSavedMoviesSearch={props.handleSavedMoviesSearch}
          handleSaveSearch={props.handleSaveSearch}
          checkbox={props.checkbox}
          setCheckbox={props.setCheckbox}
          errors={props.errors}
          infoMessage={props.infoMessage}
          setSavedMovieList={props.setSavedMovieList}
          savedQuery={props.savedQuery}
          isLoading={props.isLoading}
        />
        <MoviesCardList
          movieIsNotFound={props.movieIsNotFound}
          savedMovieList={props.savedMovieList}
          onMovieDelete={props.onMovieDelete}
          allMovies={props.allMovies}
          checkbox={props.checkbox}
          savedQuery={props.savedQuery}
          setSavedSearchQuery={props.setSavedSearchQuery}
          setMovieIsNotFound={props.setMovieIsNotFound}
          setSavedMovieList={props.setSavedMovieList}
        />
      </section>
       <Footer/>
    </>
  );
}

export default SavedMovies;
