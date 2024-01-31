import "./HeaderNavLogin.css";
import { NavLink } from "react-router-dom";

function HeaderNavLogin() {
  return(
    <div className="header__block">
      <NavLink
        className="header__button-registration link-line"
        to="signup">
        Регистрация
      </NavLink>
      <NavLink
        className="header__button-login link-hover"
        to="signin">
        Войти
      </NavLink>
    </div>
  )
}

export default HeaderNavLogin;
