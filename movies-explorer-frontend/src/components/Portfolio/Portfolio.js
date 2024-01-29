import "./Portfolio.css"
import {Link} from "react-router-dom"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Link
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/mesto"
        target="_blank">
        Статичный сайт
      </Link>
      <div className="portfolio__line" />
      <Link
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/russian-travel"
        target="_blank"
      >
        Адаптивный сайт
      </Link>
      <div className="portfolio__line" />
      <Link
        className="portfolio__link link-hover"
        to="https://github.com/SchizoVIv/react-mesto-api-full-gha"
        target="_blank"
      >
        Одностраничное приложение
      </Link>
    </section>
  );
}

export default Portfolio;
