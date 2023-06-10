import React from 'react'
import "../style/button.scss"
import { Link } from 'react-router-dom'

const Button = ({ name, direccion, tipo}) => {

  if (tipo === "Link") {
    return (
      <Link to={direccion} className="btn">
      {name}
      </Link>
    )
  }
  else if (tipo === "a") {
    return (
      <a href={direccion} className="btn" target='_blank'>
      {name}
    </a>
    )
  }
  
}

export default Button