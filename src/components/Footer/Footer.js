import { Link } from "react-router-dom";
// import '../../index.css';
import './Footer.css'

function Footer() {
    return(
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__block-of-link">
          <p className="footer__age">© 2020</p>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__item-link link-line" to="https://practicum.yandex.ru/">
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__item-link link-line" to="https://github.com/">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer;
