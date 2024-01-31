import "./Portfolio.css"
import {NavLink} from "react-router-dom"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <NavLink
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/mesto"
      >
        Статичный сайт
      </NavLink>
      <div className="portfolio__line" />
      <NavLink
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/russian-travel"
      >
        Адаптивный сайт
      </NavLink>
      <div className="portfolio__line" />
      <NavLink
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/react-mesto-api-full-gha"
      >
        Одностраничное приложение
      </NavLink>
    </section>
  );
}

export default Portfolio;
