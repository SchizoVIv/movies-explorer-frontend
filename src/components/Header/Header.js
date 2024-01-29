import React from "react";
import './Header.css'
import { useLocation } from 'react-router-dom';
import HeaderLogo from "../HeaderLogo/HeaderLogo.js"
import Navigation from "../Navigation/Navigation.js"

function Header() {

  const location = useLocation();
  const classHeader = location.pathname === '/' ? 'header' : 'header header_type_white'

  return (
    <header className={classHeader}>
      <nav className="header__conteiner">
        <HeaderLogo />
        <Navigation />
      </nav>
    </header>
  )
}

export default Header;
