import '../Register/Register.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { validatorsLogin } from '../../hooks/FormValidations';
import {
  VALID_MIN_LENGTH_8,
  VALID_INP_REQUIRED,
  VALID_EMAIL,
  VALID_PASS
   } from '../../utils/constants';

function Login(props) {

  const [validValue, setValidValue] = useState({
    email: '',
    password: ''
  });

  const [info, setInfo] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [validErr, setValidErr] = useState({
    email: {
      required: true,
      isEmail: true
    },
    password: {
      required: true,
      minLength: true,
      containNumbers: true
    }
  });

  useEffect(
    function () {

      const { email, password } = validValue;

      const emailResult = Object
        .keys(validatorsLogin.email)
        .map(errorKey => {
          const errorResult = validatorsLogin.email[errorKey](email);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

       const passwordResult = Object
        .keys(validatorsLogin.password)
        .map(errorKey => {
          const errorResult = validatorsLogin.password[errorKey](password);
          return { [errorKey]: errorResult };
        })

        .reduce((acc, element) => ({ ...acc, ...element }), {});
      setValidErr({
        email: emailResult,
        password: passwordResult,
      });
    },
    [validValue, setValidErr]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setValidValue({ ...validValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(validValue, setErrorText, setInfo, setValidValue);
    setValidValue({
      email: '',
      password: ''
    });
  };

  const classErr = (conditions) => {
    return (
      conditions ? 'form__error form__error_active' : 'form__error'
    )
  }

  const isEmailValid = Object.values(validErr.email).some(Boolean);
  const isPasswordValid = Object.values(validErr.password).some(Boolean);

  return (
    <Form
      title='Рады видеть!'
      textButton="Войти"
      textAction="Ещё не зарегистрированы?"
      textActionLink="Регистрация"
      route="/signup"
      onSubmit={handleSubmit}
      isDisabled={isPasswordValid || isEmailValid || props.isLoading}
    >
      <div className="form__box">
        <div className="form__container">
          <label className="form__text">E-mail</label>
          <input
            id="email-input"
            name="email"
            type="email"
            className='form__input'
            onChange={handleChange}
            value={validValue.email}
            disabled={props.isLoading ? true : false}
          ></input>
          {(validErr.email.required || validErr.password.required) && (
            <span className={classErr(validErr.email.required || validErr.password.required)}>
              {VALID_INP_REQUIRED}
            </span>
          )}
          {validErr.email.isEmail && (
            <span className={classErr(isEmailValid)}>
              {VALID_EMAIL}
            </span>
          )}
        </div>
        <div className="form__container">
          <label className="form__label">Пароль</label>
          <input
            id="password-input"
            name="password"
            type="password"
            className='form__input'
            onChange={handleChange}
            value={validValue.password}
            disabled={props.isLoading ? true : false}
          ></input>
          {validErr.password.required && (
            <span className={classErr(validErr.email.required || validErr.password.required)}>
              {VALID_INP_REQUIRED}
            </span>
          )}
          {validErr.password.minLength && (
            <span className={classErr(isPasswordValid)}>
              {VALID_MIN_LENGTH_8}
            </span>
          )}
          {validErr.password.containNumbers && (
            <span className={classErr(isPasswordValid)}>
              {VALID_PASS}
            </span>
          )}
          <span className={classErr(errorText)}>
            {errorText}
          </span>
          <span className={classErr(props.validErr)}>
            {props.validErr}
          </span>
          <span className={classErr(info)}>
            {info}
          </span>
          <span className={classErr(props.infoMessage)}>
            {props.infoMessage}
          </span>
        </div>
      </div>
    </Form>
  );
}

export default Login;
