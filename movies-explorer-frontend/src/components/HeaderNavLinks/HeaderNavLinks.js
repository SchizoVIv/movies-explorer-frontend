import "./HeaderNavLinks.css"
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import BurgerMenu from "../Navigation/BurgerMenu.js"
import HeaderNavAccount from "../HeaderNavAccount/HeaderNavAccount.js"

function HeaderNavLinks() {

  const [mobile, setMobile] = useState(false);

  function setMenu() {
    setMobile(!mobile);
  }

  let headerLinkClass = 'header__link link-line';
  if (mobile) {
    headerLinkClass = 'header__link header__link_active';
  } else {
    headerLinkClass += ' header__link_black ';
  }

    return (
      <>
        <BurgerMenu onClick={setMenu} mobile={mobile} />
        <ul
          className={
            mobile ? ['header__wrapper', 'header__wrapper_open'].join(' ') : ['header__wrapper']
          }
        >
          <li className="header__item">
            <Link
              to="/"
              className={headerLinkClass}
            >
              Главная
            </Link>
          </li>
          <li className="header__item">
            <NavLink to="/movies" className={headerLinkClass}>
              Фильмы
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/saved-movies" className={headerLinkClass}>
              Сохраненный фильмы
            </NavLink>
          </li>
          <li className="header__item">
            <HeaderNavAccount />
          </li>
        </ul>
      </>
    );
  }

export default HeaderNavLinks;
