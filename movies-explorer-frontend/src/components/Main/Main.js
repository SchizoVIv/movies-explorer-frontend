import "./Main.css";
import React from 'react';
import Promo from "../Promo/Promo.js";
import NavigationTab from "../Navigation/NavigationTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Footer from "../Footer/Footer.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Header from "../Header/Header.js";
import AboutMe from "../AboutMe/AboutMe.js";

function Main(props) {
  return (
    <>
      <Header
        errors={props.errors}
        infoMessage={props.infoMessage}
      />
      <main className="main">
        <Promo/>
        <NavigationTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;
