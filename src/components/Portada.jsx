import React from 'react'
import Typewriter from 'typewriter-effect'

const Portada = () => {
  return (
    <>
    <header className='Inicio' id='Inicio'>
        <div className="contain-content">
          <div className='content-yo'>
            <h3 className='yo'>Yo </h3><i className='bx bx-heart'></i><span>programar</span>
          </div>
          <div className='content-soy'>
            <h2 className='title-soy'>Soy</h2><span className='text'><Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 20,
              strings: [
                'Luis Velasco.',
                'Desarrollador Web.',
              ],
            }} /></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Portada