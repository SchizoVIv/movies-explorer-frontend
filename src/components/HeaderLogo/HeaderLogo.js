import "./HeaderLogo.css"
import logo from "../../images/logo.svg"
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks.js"
import { Link } from "react-router-dom";

function HeaderLogo(props) {
  const LoggidIn = true;
  return(
    <div className="logo">
      <Link
        className="logo__link"
        rel="stylesheet"
        to="/"
        target="_blank">
        <img src={logo} alt="логотип" />
      </Link>
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
