import React, { useState } from 'react'

const useUtility = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [navbar, setNavbar] = useState(false)
  const [porcentaje, setPorcentaje] = useState(false)

  const modeDark=()=>{
    darkMode?setDarkMode(false):setDarkMode(true)
  }
  const clickMenu = () => {
    menuActive?setMenuActive(false):setMenuActive(true)
  }
  const scrollNav = () => {
    window.scrollY >= 70?setNavbar(true):setNavbar(false)
  }

  const scrollSkill = () => {
    window.scrollY >= 640?setPorcentaje(true):setPorcentaje(false)
  }
  window.addEventListener('scroll', scrollNav)
  window.addEventListener('scroll', scrollSkill)

  return {menuActive,darkMode,navbar,modeDark,clickMenu}
}

export default useUtility