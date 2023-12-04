import "./Login.css"
import Form from "../Form/Form.js"
function Login() {
  return(
    <main className="main">
      <Form
        className="login"
        title="Рады видеть!"
        textButton="Войти"
        textAction="Ещё не зарегистрированы?"
        textActionLink="Регистрация"
        route="/signup"
      >
        <div className="form__box">
          <div className="form__conteiner">
            <p className="form__text">E-mail</p>
            <input
              className="form__input"
              type="email"
              placeholder="pochta@yandex.ru"
              required="email"/>
          </div>
          <div className="form__conteiner">
            <p className="form__text">Пароль</p>
            <input
              className="form__input form__input_active"
              type="password"
              required="password"/>
          </div>
        </div>
      </Form>
    </main>
  )
}

export default Login;
