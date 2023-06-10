import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='containerHeader'>
      <img className='fondo' src="https://i.postimg.cc/CxXcQWm2/fondo-header.jpg" alt="" />
      <div className='infoHeader'>
      <h1>Explore the latest cross-platform games: discover, compare and choose your favorites</h1>
      <Button name={"Show me"} direccion={"/navegar"} tipo={"Link"}/>
      </div>
    </header>
  )
}

export default Header