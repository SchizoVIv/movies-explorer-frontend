import { useState } from 'react';
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin.js"
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks.js"
function Navigation(props) {
  const [burger, setBurger] = useState(false);

  if(props.LoggidIn) {
    return(
      <HeaderNavLinks
        burger={burger}
        setBurger={setBurger} />
    )
  } else {
    return(
      <HeaderNavLogin />
    )
  }
}

export default Navigation;
