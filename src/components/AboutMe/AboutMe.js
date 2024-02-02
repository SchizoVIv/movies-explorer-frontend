import "./AboutMe.css";
import {NavLink} from "react-router-dom";
import foto from "../../images/11.jpg";

function AboutMe() {
  return (
    <section id="me" className="about-me">
      <h2 className="title">Студент</h2>
      <div className="about-me__blocks">
        <article className="about-me__block-of-text">
          <h3 className="about-me__name">Влада</h3>
          <h4 className="about-me__activity">Фронтенд-разработчик, 24 года</h4>
          <p className="about-me__text">
            Я родилась и живу в Молдове, закончила факультет дизайна и архитектуры ПГУ.
            Я люблю слушать музыку, а ещё увлекаюсь фотографиями. Недавно
            начала кодить. С 2020 года работала в качестве дизайнера интерьеров. В настоящее время закончила данную деятельность и развиваюсь как фронтенд-разработчик.
          </p>
          <NavLink
            className="about-me__link link-line" to="https://github.com/SchizoVIv"
          >
            Github
          </NavLink>
        </article>
        <img
          className="about-me__image"
          src={foto}
          alt="Портрет студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
