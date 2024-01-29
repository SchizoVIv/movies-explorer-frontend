import "./Form.css";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Form(props) {

  const classNameButton = !props.isDisabled ? "form__button link-hover" : "form__button form__button_color_disabled";

  return (
    <form onSubmit={props.onSubmit} id="form" className="form">
      <Link className="link-logo" to="/" target="_blank">
        <img src={logo} alt="Лого" title="лого"></img>
      </Link>
      <h2 className="form__title"> {props.title}</h2>
      {props.children}
      <button
        type="submit"
        aria-label="save"
        disabled={props.isDisabled}
        className={classNameButton}
      >
        {props.textButton}
      </button>
      <p className="form__action-text">
        {props.textAction}
        <Link to={props.route} className="form__link-signin link-line">
          {props.textActionLink}
        </Link>
      </p>
    </form>
  );
}

export default Form;
