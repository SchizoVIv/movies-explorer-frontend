import './Register.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { validatorsReg } from '../../hooks/FormValidations';
import {
  VALID_MAX_LENGTH,
  VALID_MIN_LENGTH_2,
  VALID_MIN_LENGTH_8,
  VALID_INP_REQUIRED,
  VALID_LENG,
  VALID_EMAIL,
  VALID_PASS
   } from '../../utils/constants';

function Register(props) {

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [info, setInfo] = useState(null);
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [validValue, setValidValue] = useState({
    name: {
      required: true,
      minLength: true,
      maxLength: true,
      isName: true
    },
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
      const { name, email, password } = formValue;

      const nameResult = Object
        .keys(validatorsReg.name)
        .map(errKey => {
          const err = validatorsReg.name[errKey](name);
          return { [errKey]: err };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

      const emailResult = Object
        .keys(validatorsReg.email)
        .map(errKey => {
          const err = validatorsReg.email[errKey](email);
          return { [errKey]: err };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

      const passwordResult = Object
        .keys(validatorsReg.password)
        .map(errKey => {
          const err = validatorsReg.password[errKey](password);
          return { [errKey]: err };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

      setValidValue({
        name: nameResult,
        email: emailResult,
        password: passwordResult
      });
    }, [formValue, setValidValue]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleRegistration(formValue, setErrorText, setInfo, setFormValue, setFocusName, setFocusEmail, setFocusPass);
    setFormValue({
      name: '',
      email: '',
      password: ''
    });
  };

  const classErr = (conditions) => {
    return (
      conditions ? 'form__error form__error_active' : 'form__error'
    )
  }

  const choseTextName = (text) => {
    if(focusName) {
      return text
    }
  }
  const choseTextEmail = (text) => {
    if(focusEmail) {
      return text
    }
  }
  const choseTextPass = (text) => {
    if(focusPass) {
      return text
    }
  }

  const isNameValid = Object.values(validValue.name).some(Boolean);
  const isEmailValid = Object.values(validValue.email).some(Boolean);
  const isPasswordValid = Object.values(validValue.password).some(Boolean);

  return (
    <Form
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      textAction="Уже зарегистрированы?"
      textActionLink="Войти"
      route="/signin"
      onSubmit={handleSubmit}
      isDisabled={isPasswordValid || isEmailValid || isNameValid || props.isLoading}
    >
      <div className="form__box">
        <div className="form__container">
          <p className="form__text">Имя</p>
          <input
            id="name-input"
            name="name"
            type="text"
            className='form__input'
            onChange={handleChange}
            onClick={() => {
              setFocusName(true);
            }}
            value={formValue.name}
            disabled={props.isLoading ? true : false}
          ></input>

          {validValue.name.required && (
            <span className={classErr(validValue.email.required || validValue.name.required || validValue.password.required)}>
              {choseTextName(VALID_INP_REQUIRED)}
            </span>
          )}

          {validValue.name.minLength && (
            <span className={classErr(isNameValid)}>
              {choseTextName(VALID_MIN_LENGTH_2)}
            </span>
          )}

          {validValue.name.maxLength && (
            <span className={classErr(isNameValid)}>
              {choseTextName(VALID_MAX_LENGTH)}
            </span>
          )}

          {validValue.name.isName && (
            <span className={classErr(isNameValid)}>
              {choseTextName(VALID_LENG)}
            </span>
          )}
        </div>

        <div className="form__container">
          <p className="form__text">E-mail</p>
          <input
            id="email-input"
            name="email"
            type="email"
            className="form__input"
            onChange={handleChange}
            onClick={() => {
              setFocusEmail(true);
            }}
            value={formValue.email}
            disabled={props.isLoading ? true : false}
          ></input>
          {validValue.email.required && (
            <span className={classErr(validValue.email.required || validValue.name.required || validValue.password.required)}>
              {choseTextEmail(VALID_INP_REQUIRED)}
            </span>
          )}
          {validValue.email.isEmail && (
            <span className={classErr(isEmailValid)}>
              {choseTextEmail(VALID_EMAIL)}
            </span>
          )}
        </div>
        <div className="form__container">
          <p className="form__text">Пароль</p>
          <input
            id="password-input"
            name="password"
            type="password"
            className="form__input form__input_active"
            onChange={handleChange}
            onClick={() => {
              setFocusPass(true);
            }}
            value={formValue.password}
            disabled={props.isLoading ? true : false}
          ></input>

          {validValue.password.required && (
            <span className={classErr(validValue.email.required || validValue.name.required || validValue.password.required)}>
              {choseTextPass(VALID_INP_REQUIRED)}
            </span>
          )}
          {validValue.password.minLength && (
            <span className={classErr(isPasswordValid)}>
              {choseTextPass(VALID_MIN_LENGTH_8)}
            </span>
          )}
          {validValue.password.containNumbers && (
            <span className={classErr(isPasswordValid)}>
              {choseTextPass(VALID_PASS)}
            </span>
          )}
          <span className={classErr(errorText)}>
            {errorText}
          </span>
          <span className={classErr(props.validValue)}>
            {props.validValue}
          </span>
          <span
            className={
              classErr(info)
            }
          >
            {info}
          </span>
        </div>
      </div>
    </Form>
  );
}

export default Register;
