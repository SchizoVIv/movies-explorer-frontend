import "./HeaderNavLinks.css"
import { Link } from "react-router-dom";
import BurgerMenu from "../Navigation/BurgerMenu.js"
import HeaderNavAccount from "../HeaderNavAccount/HeaderNavAccount.js"

function HeaderNavLinks(props) {

  let headerLinkClass = 'header__link link-line';
  if (props.burger) {
    headerLinkClass = 'header__link header__link_active';
  } else {
    headerLinkClass += ' header__link_hidden';
  }

  let headerItemClass = 'header__item';
  if (!props.burger) {
    headerItemClass += ' header__item_hidden';
  }

  return(
    <>
      <BurgerMenu
        burger={props.burger}
        setBurger={props.setBurger} />
      <ul
        className={props.burger ? ['header__list header__list_open'] : ['header__list header__list_hidden']}>
        <li className={headerItemClass}>
          <Link
            className={headerLinkClass}
            to="/"
            target="_blank"
          > Главная</Link>
        </li>
        <li className={headerItemClass}>
          <Link
            className={headerLinkClass}
            to="/movies"
            target="_blank"
            >Фильмы</Link>
        </li>
        <li className={headerItemClass}>
          <Link
            className={headerLinkClass}
            to="/saved-movies"
            target="_blank"
          >Сохраненные фильмы</Link>
        </li>
        <li className={headerItemClass}>
          <HeaderNavAccount />
        </li>
      </ul>
      </>
  )
}

export default HeaderNavLinks;
