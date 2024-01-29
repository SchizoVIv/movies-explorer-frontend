import './ShowMoreButton.css';
import React from 'react';

function ShowMoreButton(props) {
  return props.movieIsNotFound ? ( '' ) : (
    <div className="further">
      <button
        onClick={props.onShowMore}
        className={
          props.readLess ? ' further__button further__button_hidden' : 'further__button'
        }
        aria-label="further"
        type="button"
      >
        Ещё
      </button>
    </div>
  );
}

export default ShowMoreButton;
