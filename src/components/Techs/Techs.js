import "./Techs.css"
function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="title">Технологии</h2>
      <div className="techs__block">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__technologies">
        <div className="techs__element">
          <p className="techs__element-text">HTML</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">CSS</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">JS</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">React</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">Git</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">Express.js</p>
        </div>
        <div className="techs__element">
          <p className="techs__element-text">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
