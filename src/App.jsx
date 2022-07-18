import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'
import '../src/elements/SobreMi.css'
import '../src/elements/Habilidades.css'
import '../src/elements/Contacto.css'

function App() {

  const [navbar, setNavbar] = useState(false)
  const [porcentaje, setPorcentaje] = useState(false)

  const scrollNav = () => {
    if (window.scrollY >= 40) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  const scrollSkill = () => {
    if (window.scrollY >= 900) {
      setPorcentaje(true)
    } else { setPorcentaje(false) }
  }

  window.addEventListener('scroll', scrollNav)
  window.addEventListener('scroll', scrollSkill)


  return (
    <article className='app'>
      <nav className={navbar ? 'nav-active' : 'nav'}>
        <div className="contain-nav">
          <div className="contain-logo">
            <div className='logo'></div>
          </div>

          <div className="nav-contain-rutes">
            <ul className='ul-rutes'>
              <li><a href='#Principal' className='nav-link' >Principal</a></li>
              <li><a href='#2' className='nav-link'>Sobre Mi</a></li>
              <li><a href='#3' className='nav-link'>Habilidades</a></li>
              <li><a href='/' className='nav-link'>Portafolio</a></li>
              <li><a href='#5' className='nav-link'>Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className='Principal' id='Principal'>
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
      <section className='sobre-mi' id='2'>
        <div className='contain-datos'>
          <div className='container-foto'> <div className="foto">{/*Foto presentacion, colocada con css*/}</div></div>
          <div className='presentacion'>
            <div className='profesion'><h2>Desarrollador Web</h2></div>
            <div className='parrafo'>
              <p>Soy <b>Luis Velasco</b>, en el 2022 recibí mi título como desarrollador Frontend.</p>
              <p>Busco incrementar mis habilidades en el área de Desarrollo Web y la Inteligencia Artificial, por lo cual en la actualidad estoy estudiando el programa de Desarrollo Web Full-Stack y Ciencias de la Computación en <b>Academlo</b>.</p>
              <p>En mis tiempos libres me gusta incrementar mi conocimiento, indagando sobre las tecnicas de vanguardia que se utilizan en el ámbito laboral.</p></div>
            <div className='contain-redes'>
              <div className='redes'><i className='bx bxl-linkedin'></i></div>
              <div className='redes'><i className='bx bxl-github'></i></div>
              <div className='redes'><i className='bx bxl-instagram'></i></div>
            </div>
            <div>
            </div>
            <div className='contain-buttons'>
              <div className="button-container-1">
                <span className="contact"><i className='bx bxs-paper-plane'></i></span>
                <button id='work' type="button" name="Hover">CONTACTO</button>
              </div>

              <div className="button-container-2">
                <span className="hv"><i className='bx bxs-download'></i></span>
                <button id='descarga' type="button" name="Hover">DESCARGA CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='3' className='habilidades' >
        <div className='contain-habilidades'>

          <div className='skills'>
            <div className='contain-icon-hability'>
              <div className='icon'>
                <i className='bx bx-edit-alt' ></i>
              </div>
              <div className='hability'>
                <h3>Educacion</h3>
              </div>
            </div>
            <div className='data'>
              <h3>Academlo</h3>
              <p>Desarrollo Web Full-Stack</p>
            </div>
          </div>

          <div className='skills'>
            <div className='contain-icon-hability'>
              <div className='icon'>
                <i className='bx bxs-briefcase-alt-2'></i>
              </div>
              <div className='hability'>
                <h3>Experiencia</h3>
              </div>
            </div>
            <div className='data'>
              <h3>Banco Serfinanza</h3>
              <p>Aux Comercial</p>
            </div>
            <div className='data'>
              <h3>Ojiva Consultores S.A de C.V</h3>
              <p>Tecnología e Investigación</p>
            </div>
            <div className='data'>
              <h3></h3>
              <p></p>
            </div>
          </div>

          <div className='skills'>
            <div className='contain-icon-hability'>
              <div className='icon'>
                <i className='bx bx-code-alt'></i>
              </div>
              <div className='hability'>
                <h3>Habilidades</h3>
              </div>
            </div>

            <div className='data'>
              <h4>HTML</h4>
              <div className={porcentaje ? 'skills-progress html' : ''}>
                <span className={porcentaje ? 'progress' : ''}></span>
              </div>
            </div>
            <div className='data'>
              <h4>CSS</h4>
              <div className={porcentaje ? 'skills-progress css' : ''}>
                <span className={porcentaje ? 'progress' : ''}></span>
              </div>
            </div>
            <div className='data'>
              <h4>JavaScript</h4>
              <div className={porcentaje ? 'skills-progress js' : ''}>
                <span className={porcentaje ? 'progress' : ''}></span>
              </div>
            </div>
            <div className='data'>
              <h4>React</h4>
              <div className={porcentaje ? 'skills-progress react' : ''}>
                <span className={porcentaje ? 'progress' : ''}></span>
              </div>
            </div>
            <div className='data'>
              <h4>GitHub</h4>
              <div className={porcentaje ? 'skills-progress github' : ''}>
                <span className={porcentaje ? 'progress' : ''}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='4'></section>


      <section id='5' className='contacto'>
        <div className='container-contacto'>
          <div className='title-contact'>
            <h2>Contacto</h2>
          </div>
          <div className='contact-means'>
            <div className='info'>
              <i className='bx bx-devices'></i>
              <div className='contacting'>
                <h2>Phone</h2>
                <p>+57 314 660 5344</p>
              </div>
            </div>
            <div className='info'>
              <i className='bx bxs-envelope-open'></i>
              <div className='contacting'>
                <h2>Email</h2>
                <p>luiselsw27@gmail.com</p>
              </div>
            </div>
            <div className='info'>
              <i className='bx bx-current-location bx-rotate-90'></i>
              <div className='contacting'>
                <h2>Adress</h2>
                <p>Barranquilla, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>Copyright © All Rights Reserved.</span>
      </footer>
    </article>
  )
}

export default App
