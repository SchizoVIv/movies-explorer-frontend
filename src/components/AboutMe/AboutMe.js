import "./AboutMe.css"
import {Link} from "react-router-dom"
import foto from "../../images/pic__COLOR_pic.jpg"

function AboutMe() {
  return (
    <section id="me" className="about-me">
      <h2 className="title">Студент</h2>
      <div className="about-me__blocks">
        <article className="about-me__block-of-text">
          <h3 className="about-me__name">Виталий</h3>
          <h4 className="about-me__activity">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
            начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.
          </p>
          <Link className="about-me__link link-line" href="">
            Github
          </Link>
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
