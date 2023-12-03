import "./MoviesCard.css"

function MoviesCard(props) {
    return(
      <div className="element">
        <img
          className="element__image"
          src={props.card.image}
          alt="Превью фильма"
        />
        <div className="element__box">
          <div className="element__block-of-text">
            <h2 className="element__title">{props.card.nameRU}</h2>
            <p className="element__time">{props.card.duration}</p>
          </div>
          <button
            className={props.class}
            type="button"
            aria-label="В избранное"
          ></button>
        </div>
      </div>
    )
}

export default MoviesCard;
