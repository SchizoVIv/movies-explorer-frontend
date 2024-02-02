import { NavLink } from "react-router-dom";
import './Footer.css';

function Footer() {
    return(
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__block-of-link">
          <p className="footer__age">© 2024</p>
          <ul className="footer__list">
            <li className="footer__item">
              <NavLink
                className="footer__item-link link-line"
                to="https://practicum.yandex.ru/"
              >
                Яндекс.Практикум
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink
                className="footer__item-link link-line" to="https://github.com/"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer;
