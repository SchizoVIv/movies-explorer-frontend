import "./HeaderNavLinks.css"
import { Link } from "react-router-dom";
import BurgerMenu from "../Navigation/BurgerMenu.js"
import HeaderNavAccount from "../HeaderNavAccount/HeaderNavAccount.js"

function HeaderNavLinks(props) {

  let headerLinkClass = 'header__link link-line';
  if (props.burger) {
    headerLinkClass = 'header__link header__link_active';
  } else {
    headerLinkClass += ' burger-hidden';
  }

  let headerItemClass = 'header__item';
  if (!props.burger) {
    headerItemClass += ' burger-hidden';
  }

  return(
    <>
      <BurgerMenu
        burger={props.burger}
        setBurger={props.setBurger} />
      <ul
        className={props.burger ? ['header__list burger-open'] : ['header__list burger-hidden']}>
        <li className={headerItemClass}>
          <Link className={headerLinkClass} to="/"> Главная</Link>
        </li>
        <li className={headerItemClass}>
          <Link className={headerLinkClass} to="/movies">Фильмы</Link>
        </li>
        <li className={headerItemClass}>
          <Link className={headerLinkClass} to="/saved-movies">Сохраненные фильмы</Link>
        </li>
        <li className={headerItemClass}>
          <HeaderNavAccount />
        </li>
      </ul>
      </>
  )
}

export default HeaderNavLinks;
