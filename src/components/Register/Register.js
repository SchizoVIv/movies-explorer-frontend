import "./Register.css"
import Form from "../Form/Form.js"

function Register(props){
  return(
    <main className="main">
    <Form
      className="register"
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      textAction="Уже зарегистрированы?"
      textActionLink="Войти"
      route="/signin"
    >
      <div className="form__box">
        <div className="form__conteiner">
          <p className="form__text">Имя</p>
          <input className="form__input" type="text" value="Виталий"/>
        </div>
        <div className="form__conteiner">
          <p className="form__text">E-mail</p>
          <input className="form__input" type="email" value="pochta@yandex.ru"/>
        </div>
        <div className="form__conteiner">
          <p className="form__text">Пароль</p>
          <input className="form__input form__input_active" type="password" value="11111111111111"/>
          <span className="form__error">Что-то пошло не так...</span>
        </div>
      </div>
    </Form>
    </main>
  )
}

export default Register;
