import "./HeaderLogo.css"
import logo from "../../images/logo.svg"
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks.js"
import { NavLink } from "react-router-dom";

function HeaderLogo(props) {
  const LoggidIn = true;
  return(
    <div className="logo">
      <NavLink
        className="logo__link"
        rel="stylesheet"
        to="/">
        <img src={logo} alt="логотип" />
      </NavLink>
      {LoggidIn & props.mobile === false ? (
        <HeaderNavLinks
          login={LoggidIn} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default HeaderLogo;
