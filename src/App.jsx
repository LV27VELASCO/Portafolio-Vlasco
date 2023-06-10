import './App.css'
import { useState } from 'react'
import SobreMi from './components/SobreMi'
import Portafolio from './components/Portafolio'
import Contacto from './components/Contacto'
import Portada from './components/Portada'
import Navegacion from './components/Navegacion'
import Experiencia from './components/Experiencia'
import useUtility from './Hooks/useUtility'

function App() {
  const {menuActive,darkMode,navbar,modeDark,clickMenu} = useUtility()
  const fecha = new Date()
  return (
    <article className={darkMode?'app active' : 'app'}>
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

export default App
