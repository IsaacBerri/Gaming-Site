import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

const NavBar = ({principal, secundaria}) => {
  if (principal) {
    return (
      <nav className='containerNav'>
          <img src="https://i.postimg.cc/NFPk6L20/logo.jpg" alt="" />
          <ul className='listNav'>
              <Link to="/" className="itenNav"><li>Home</li></Link>
              <Link to="/navegar" className="itenNav"><li>Browse</li></Link>
              <Link to="/comunidad" className="itenNav"><li>Community</li></Link>
          </ul>
      </nav>
    )
  }
  else if (secundaria) {
    return (
      <nav className="volver">
        <Link to={"/navegar"}>
          <Icon
            icon="material-symbols:arrow-back-ios"
            color="black"
            width="40"
            height="40"
          />
        </Link>
        <h3>
          <b>Return</b>
        </h3>
      </nav>
    )
  }
}

export default NavBar