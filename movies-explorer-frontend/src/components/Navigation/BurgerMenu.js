import React from 'react';
import './BurgerMenu.css';

function BurgerMenu(props) {
  return (
    <>
      <div className = {props.mobile ? ['header__overlay', 'header__wrapper_open'].join(' ') : ['']}>
      </div>
      <div
      className={props.mobile ? ["burger active"] : ["burger"]}
        id="burger"
        onClick={props.onClick}
      >
          <span className="burger__line burger__line_nomber_1"></span>
          <span className="burger__line burger__line_nomber_2"></span>
          <span className="burger__line burger__line_nomber_3"></span>
      </div>
    </>
  );
}
export default BurgerMenu;
