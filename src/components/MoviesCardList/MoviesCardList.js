import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import { useLocation } from 'react-router-dom';
import {initialMovies} from "../../utils/constants.js"

function MoviesCardList() {
  const location = useLocation();
  if(location.pathname === '/movies') {
    return(
      <ul className="elements">
        {initialMovies.map((card) => {
          return(
            <MoviesCard
              card={card}
              class={
                card.save === false ? ['element__button-favourites'] : ['element__button-favourites', 'element__button-favourites_active'].join(' ')
              } />
          )
        })}
      </ul>
    )
  } else if(location.pathname === '/saved-movies') {
    return(
      <div className="elements">
        {initialMovies.map((card, i) => {
          if(i <= 2) {
            return(
              <MoviesCard
                card={card}
                class={'element__button-delete'}
               />
            )
          } else {
            return(<></>)
          }
        })}
      </div>
    )
  }
 }

 export default MoviesCardList;
