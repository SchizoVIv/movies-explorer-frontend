import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm.js"
import Footer from "../Footer/Footer.js"
import Header from "../Header/Header.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList"



function Movies() {
  return (
    <main className="main">
      <Header />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <div className="further">
          <button className="further__button">Ещё</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Movies;
