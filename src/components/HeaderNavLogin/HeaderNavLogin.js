import "./HeaderNavLogin.css";
import { Link } from "react-router-dom";

function HeaderNavLogin() {
  return(
    <div className="header__block">
      <Link className="header__button-registration link-line" to="signup">
        Регистрация
      </Link>
      <Link className="header__button-login link-hover" to="signin">
        Войти
      </Link>
    </div>
  )
}

export default HeaderNavLogin;
