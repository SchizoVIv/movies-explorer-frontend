import React from "react";
import './Header.css'
import { useLocation } from 'react-router-dom';
import HeaderLogo from "../HeaderLogo/HeaderLogo.js"
import Navigation from "../Navigation/Navigation.js"
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin.js"


function Header() {
  const LoggidIn = true;
  const location = useLocation();
  if(location.pathname === '/') {
      return (
        <header className={
          location.pathname === '/' ? ['header'] : ['header', 'header_type_white'].join(' ')
        }>
          <nav className="header__conteiner">
            <HeaderLogo />
            <HeaderNavLogin />
              {/* <Navigation
                LoggidIn={LoggidIn} /> */}

          </nav>
        </header>
      )
    } else {
      return (
        <header className={
          location.pathname === '/' ? ['header'] : ['header', 'header_type_white'].join(' ')
        }>
          <nav className="header__conteiner">
            <HeaderLogo />
            <Navigation
              LoggidIn={LoggidIn} />
          </nav>

        </header>
      )
    }
}

export default Header;
