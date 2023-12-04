import "./Main.css"
import Promo from "../Promo/Promo.js"
import NavigationTab from "../Navigation/NavigationTab.js"
import AboutProject from "../AboutProject/AboutProject.js"
import Footer from "../Footer/Footer.js"
import Techs from "../Techs/Techs.js"
import Portfolio from "../Portfolio/Portfolio.js"
import Header from "../Header/Header.js"
import AboutMe from "../AboutMe/AboutMe.js"

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <NavigationTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
