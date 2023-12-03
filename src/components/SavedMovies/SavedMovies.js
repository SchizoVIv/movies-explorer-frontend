import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm.js"
import MoviesCardList from "../MoviesCardList/MoviesCardList.js"
import Footer from "../Footer/Footer.js"
import Header from "../Header/Header.js"

function SavedMovies() {
  return(
   <>
    <Header />
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
    </section>
    <Footer />
   </>
  )
 }

 export default SavedMovies;
