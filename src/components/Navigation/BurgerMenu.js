import React from 'react';
import './BurgerMenu.css';

function BurgerMenu(props) {

  function setMenu(e) {
    e.preventDefault();
    console.log('click')
    props.setBurger(!props.burger);
  }

  return (
    <>
      <div
        className={props.burger ? ['burger__overlay burger__overlay_open'] : ['burger__overlay burger__overlay_hidden']}></div>
      <div
        className={props.burger ? ["burger active"] : ["burger"]}
        id="burger"
        onClick={setMenu}>
        <span className="burger__line burger__line_nomber_1"></span>
        <span className="burger__line burger__line_nomber_2"></span>
        <span className="burger__line burger__line_nomber_3"></span>
      </div>
    </>
  );
}
export default BurgerMenu;
