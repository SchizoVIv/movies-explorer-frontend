import '../Navigation/Navigation.css';
import React from 'react';
import { useContext } from 'react';
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin.js"
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks.js"
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation(props) {
  const user = useContext(CurrentUserContext);

  if (user.isLoggedIn) {
    return (
      <nav className="header__container">
        <HeaderNavLinks/>
      </nav>
    );
  } else {
    return (
      <HeaderNavLogin
        err={props.err}
        infoMessage={props.infoMessage}
      />
    )
  }
}
export default Navigation;
