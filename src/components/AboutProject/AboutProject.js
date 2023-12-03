import './AboutProject.css'

function AboutProject() {
  return (
    <section id='project' className="about-project">
      <h2 className="title">О проекте</h2>
      <div className="about-project__block-of-text">
        <div className="about-project__text-stages">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-time">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__table">
        <div className="about-project__table-element about-project__table-element-week-1">
          <p className="about-project__text-week-1">1 неделя</p>
        </div>
        <div className="about-project__table-element about-project__table-element-week-4">
          <p className="about-project__text-week-4">4 недели</p>
        </div>
        <div className="about-project__table-element">
          <p className="about-project__text-back">Back-end</p>
        </div>
        <div className="about-project__table-element">
          <p className="about-project__text-front">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
