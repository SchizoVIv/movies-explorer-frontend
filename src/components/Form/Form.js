import "./Form.css"
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Form(props) {
  return(
    <form id="form" className="form">
      <Link className="link-logo" to="/">
        <img src={logo} alt="логотип" />
      </Link>
      <h2 className="form__title">{props.title}</h2>
      {props.children}

      <button className="form__button">{props.textButton}</button>
      <p className="form__action-text">{props.textAction}
      <Link className="form__link-signin" to={props.route}>{props.textActionLink}</Link></p>
    </form>
  )
}

export default Form;
