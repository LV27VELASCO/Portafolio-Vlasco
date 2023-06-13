import React from 'react'
import SobreMi from './SobreMi'
import Portafolio from './Portafolio'
import Contacto from './Contacto'
import Portada from './Portada'
import Navegacion from './Navegacion'
import Experiencia from './Experiencia'
import useUtility from '../Hooks/useUtility'
import '../style/Layout.css'

const Layout = () => {
    const {menuActive,darkMode,navbar,modeDark,clickMenu} = useUtility()
    const fecha = new Date()
  return (
    <article className={darkMode?'layout active' : 'layout'}>
      <Navegacion navbar={navbar} menuActive={menuActive} 
      darkMode={darkMode} modeDark={modeDark} 
      clickMenu={clickMenu}/>
      <Portada/>
      <SobreMi/>
      <Experiencia/>
      <Portafolio/>
      <Contacto/>
      <footer>
        <span>{fecha.getFullYear()}</span>
      </footer>
    </article>
  )
}

export default Layout