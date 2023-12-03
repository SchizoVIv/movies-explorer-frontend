import "./Login.css"
import Form from "../Form/Form.js"
function Login() {
  return(
    <section className="login">
      <Form
        title="Рады видеть!"
        textButton="Войти"
        textAction="Ещё не зарегистрированы?"
        textActionLink="Регистрация"
        route="/signup"
      >
        <div className="form__box">
          <div className="form__conteiner">
            <p className="form__text">E-mail</p>
            <input className="form__input" type="email" value="pochta@yandex.ru"/>
          </div>
          <div className="form__conteiner">
            <p className="form__text">Пароль</p>
            <input className="form__input form__input_active" type="password" value=""/>
          </div>
        </div>
      </Form>
    </section>
  )
}

export default Login;
