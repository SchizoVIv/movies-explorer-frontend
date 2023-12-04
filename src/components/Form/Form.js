import "./Form.css"
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Form(props) {
  return(
    <form id="form" className="form">
      <Link
        className="link-logo"
        to="/"
        target="_blank">
        <img src={logo} alt="логотип" />
      </Link>
      <h2 className="form__title">{props.title}</h2>
      {props.children}

      <button className="form__button link-hover">{props.textButton}</button>
      <p className="form__action-text">{props.textAction}
      <Link
        className="form__link-signin link-line"
        to={props.route}
        target="_blank"
      >{props.textActionLink}</Link></p>
    </form>
  )
}

export default Form;
