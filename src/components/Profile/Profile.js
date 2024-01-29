import Header from '../Header/Header';
import './Profile.css';
import { React, useState, useContext, useRef } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import Preloader from '../Preloader/Preloader';
import { INFO_DATA_NO_UPDATE } from '../../utils/constants';

function Profile(props) {

  const user = useContext(CurrentUserContext);
  const [focus, setFocus] = useState(false);
  const [info, setInfo] = useState(null);
  const [err, setErr] = useState(null);

  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isDirty,
      isValid
    }
  } = useForm({
    mode: 'onChange',
    shouldFocusError: true,
    delayError: 0,
    criteriaMode: 'all',
    defaultValues: {
      name: user.currentUser.name,
      email: user.currentUser.email
    }
  });

  const isDisabled = (!isDirty && !isValid) || props.isLoading;
  // const isDisabled = (!isDirty && isValid) || props.isLoading;

  function onSubmit(data) {
    if (data.name !== user.currentUser.name || data.email !== user.currentUser.email) {
      props.onUpdateUser(data, setInfo, setErr, setFocus);
    } else {
      setInfo(INFO_DATA_NO_UPDATE);
      setTimeout(() => {
        setInfo(null);
      }, 3000);
    }
  }

  return (
    <>
      {props.isLoading ? <Preloader /> : ''}
      <Header/>
      <section id="profile" className="profile">
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="profile__title">
            Привет, {user.currentUser.name}!
          </h2>
          <div className="profile__form">
            <div className="profile__conteiner-name">
              <label className="profile__text profile__text_name">Имя</label>
              <input
                onClick={() => {
                  setFocus(true);
                }}
                className="profile__input profile__input_name"
                placeholder="Имя"
                defaultValue={user.currentUser.name}
                name="name"
                type="text"
                {...register('name', {
                  required: 'Обязательное поле',
                  pattern: {
                    value: /^[а-яА-ЯёЁa-zA-Z0-9-;._\s]+$/,
                    message: 'Неверно указано имя'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Максимальное количество символов: 30'
                  },
                  minLength: {
                    value: 2,
                    message: 'Минимальное количество символов: 2'
                  }
                })}
              ></input>
            </div>

            {errors.name && <span className="profile__error">{errors.name.message}</span>}

            <div className="profile__conteiner-email">
              <label className="profile__text profile__text_email">E-mail</label>
              <input
                onClick={() => {
                  setFocus(true);
                }}
                className="profile__input profile__input_email"
                placeholder="email@mail.ru"
                defaultValue={user.currentUser.email}
                name="email"
                type="email"
                {...register('email', {
                  required: 'Обязательное поле',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: 'Укажите электронный адрес в правильном формате'
                  }
                })}
              ></input>
            </div>

            {errors.email && <span className="profile__error">{errors.email.message}</span>}
            {props.errors && isDirty && <span className="profile__error">{props.errors}</span>}
            {err && <span className="profile__error">{err}</span>}
            <span
              className={
                info ? ['form__error', 'form__error_active_green'].join(' ') : ['form__error']
              }
            >
              {info}
            </span>
          </div>
          <div className="profile__conteiner-button">
            <button
              type="submit"
              disabled={isDisabled}
              className="profile__button-edit link-hover"
            >
              {focus ? 'Сохранить' : 'Редактировать'}
            </button>
            <button onClick={props.onLogout} className="profile__button-exit link-hover">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
