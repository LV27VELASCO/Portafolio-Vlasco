import React, { useState } from 'react'

const Navegacion = ({navbar,darkMode,menuActive,modeDark,clickMenu}) => {
    
  return (
    <>
    <nav className={navbar ? 'nav active' : 'nav'}>
        <div className="contain-nav">
          <div className="contain-logo">
            <div className={darkMode?'logo':'logo active'}>{/*Logo, colocado con css*/}</div>
          </div>

          <div className={menuActive ? 'nav-contain-rutes active' : "nav-contain-rutes"}>
            <ul className='ul-rutes'>
              <li><a href='#Principal' className='nav-link' >Principal</a></li>
              <li><a href='#2' className='nav-link'>Sobre Mi</a></li>
              <li><a href='#3' className='nav-link'>Habilidades</a></li>
              <li><a href='#4' className='nav-link'>Portafolio</a></li>
              <li><a href='#5' className='nav-link'>Contacto</a></li>
              <li><div onClick={modeDark} className={darkMode ? "dark active" : "dark"}>
              <i className='bx bx-sun'></i>
              <i className='bx bx-moon' ></i>
            </div></li>
            </ul>
            
          </div>
          <div className='contain-menu' onClick={clickMenu}>{menuActive ? <i className='bx bx-x'></i> : <i className='bx bx-menu-alt-right'></i>}</div>
        </div>
      </nav>
    </>
  )
}

export default Navegacion