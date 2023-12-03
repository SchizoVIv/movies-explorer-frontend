import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm.js"
import Footer from "../Footer/Footer.js"
import Header from "../Header/Header.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList"



function Movies() {
  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <div className="further">
          <button className="further__button">Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
