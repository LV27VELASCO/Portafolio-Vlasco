import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import instacard from '../src/assets/img/Insta-clone.png'
import pokeapp from '../src/assets/img/Pokemon-app2.png'
import quotecard from '../src/assets/img/quote-machine.png'
import shoppingcard from '../src/assets/img/shopping-card.png'
import weathercard from '../src/assets/img/weather-app.png'
import perfil from '../src/assets/img/Perfil-luis.jpg'
import curriculum from '../src/assets/img/Luis_Velasco_currículum.pdf'
import { useState } from 'react'
import '../src/style/SobreMi.css'
import '../src/style/Habilidades.css'
import '../src/style/Contacto.css'
import '../src/style/Portafolio.css'
import Form from './elements/Form'


function App() {

  const [navbar, setNavbar] = useState(false)
  const [porcentaje, setPorcentaje] = useState(false)
  const [btnActive, setBtnActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  const clickMenu = () => {
    if (menuActive) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }

  const click = () => {
    if (btnActive) {
      setBtnActive(false)
    } else {
      setBtnActive(true)
    }


  }


  const scrollNav = () => {
    if (window.scrollY >= 70) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  const scrollSkill = () => {
    if (window.scrollY >= 640) {
      setPorcentaje(true)
    } else { setPorcentaje(false) }
  }

  window.addEventListener('scroll', scrollNav)
  window.addEventListener('scroll', scrollSkill)


  return (
    <article className='app'>
      <nav className={navbar ? 'nav active' : 'nav'}>
        <div className="contain-nav">
          <div className="contain-logo">
            <div className='logo'>{/*Logo, colocado con css*/}</div>
          </div>

          <div className={menuActive?'nav-contain-rutes active':"nav-contain-rutes"}>
            <ul className='ul-rutes'>
              <li><a href='#Principal' className='nav-link' >Principal</a></li>
              <li><a href='#2' className='nav-link'>Sobre Mi</a></li>
              <li><a href='#3' className='nav-link'>Habilidades</a></li>
              <li><a href='#4' className='nav-link'>Portafolio</a></li>
              <li><a href='#5' className='nav-link'>Contacto</a></li>
            </ul>
          </div>
          <div className='contain-menu' onClick={clickMenu}>{menuActive?<i class='bx bx-x'></i>:<i className='bx bx-menu-alt-right'></i>}</div>
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
          <div className='container-foto'>
            <img src={perfil} className="foto"/>
          </div>
          <div className='presentacion'>
            <div className='profesion'><h2>Desarrollador Web</h2></div>
            <div className='parrafo'>
              <p>Soy <b>Luis Velasco</b>, en el 2022 recibí mi título como desarrollador Frontend.</p>
              <p>Busco incrementar mis habilidades en el área de Desarrollo Web y la Inteligencia Artificial, por lo cual en la actualidad estoy estudiando el programa de Desarrollo Web Full-Stack y Ciencias de la Computación en <b>Academlo</b>.</p>
              <p>En mis tiempos libres me gusta incrementar mi conocimiento, indagando sobre las tecnicas de vanguardia que se utilizan en el ámbito laboral.</p></div>
            <div className='contain-redes'>
              <a href="https://www.linkedin.com/in/luis-velasco-24b668199" target='_blank'><div className='redes'><i className='bx bxl-linkedin'></i></div></a>
              <a href="https://github.com/LV27VELASCO" target='_blank'><div className='redes'><i className='bx bxl-github'></i></div></a>
              <a href="https://www.instagram.com/velasco.27/" target='_blank'><div className='redes'><i className='bx bxl-instagram'></i></div></a>
            </div>
            <div>
            </div>
            <div className='contain-buttons'>
              <a href="#5">
                <div className="button-container-1">
                  <span className="contact"><i className='bx bxs-paper-plane'></i></span>
                  <button id='work' type="button" name="Hover">CONTACTO</button>
                </div>
              </a>
              <div className="button-container-2">
                <span className="hv"><i className='bx bxs-download'></i></span>
                <a href={curriculum} download='Luis Velasco CV' ><button id='descarga' type="button" name="Hover">DESCARGA CV</button></a>
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

      <section id='4' className='portafolio'>
        <div className='title-portafolio'>
          <h1>Portafolio</h1>
        </div>
        <div className='flex-portafolio'>
          <div className="cardxxxx">
            <img src={shoppingcard} />
            <div className='description-card'>
              <h3>Ecomerce</h3>
              <p>Proyecto desarrollado en Academlo en el cual se desarrolló la interfaz
                de un Carrito de compras usando maquetación con HTML y CSS.</p>
            </div>
          </div>
          <div className="card">
            <img src={quotecard} />
            <a href="https://frases-and-autores.netlify.app" target='_blank'>
              <div className='description-card'>
                <h3>Quote Machine</h3>
                <p>Proyecto desarrollado en Academlo en el cual se desarrolló un generador
                  aleatorio de frases usando REACT.</p>
              </div>
            </a>
          </div>
          <div className="card">


            <img src={weathercard} />
            <a href="https://veloc-climate.netlify.app" target='_blank'>
              <div className='description-card'>
                <h3>Weather App</h3>
                <p>Proyecto desarrollado en Academlo en el cual se desarrolló
                  una aplicación que muestra el clima usando REACT.</p>
              </div>
            </a>

          </div>
          <div className="card">
            <img src={pokeapp} />
            <a href="https://pokedex-lvelasco.netlify.app" target='_blank'>
              <div className='description-card'>
                <h3>Pokedex</h3>
                <p>Proyecto desarrollado en Academlo. En este proyecto creamos una app de la famosa
                  serie Pokemons, en esta consumimos recursos de una API la cual nos arrojaba toda la informacion
                  de los pokemones usando REACT<br />

                </p>
              </div>
            </a>
          </div>
          <div className="card">
            <img src={instacard} />
            <a href="https://veloc-ints.netlify.app" target='_blank'>
              <div className='description-card'>
                <h3>Instagram Clone</h3>
                <p>Proyecto desarrollado en Academlo en el cual se clonó la interfaz de Instagram
                  usando maquetación con HTML y CSS.</p>
              </div>
            </a>
          </div>

        </div>

      </section>


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

          <div className='container-form'>
            <div className="button-message" onClick={click}>
              <span className="icon-message">
                {btnActive ?
                  <i className='bx bxs-low-vision'></i>
                  :
                  <i className='bx bx-mail-send'></i>
                }
              </span>
              <button id='descarga' type="button" name="Hover">{btnActive ? 'Hide form' : 'Send mail'}</button>
            </div>
            {
              btnActive
                ?
                <Form />
                :
                <></>
            }

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
