import React from 'react'
import perfil from '../assets/img/Perfil-luis.jpg'
import curriculum from '../assets/img/Currículum_Luis_Velasco.pdf'
import '../style/SobreMi.css'
const SobreMi = () => {
  return (
    <>
    <section className='sobre-mi' id='2'>
        <div className='contain-datos'>
          <div className='container-foto'>
            <img src={perfil} className="foto" />
          </div>
          <div className='presentacion'>
            <div className='profesion'><h2>Desarrollador Web</h2></div>
            <div className='parrafo'>
              <p>Soy <b>Luis Velasco</b>, estudiante de <b>Politécnico GranColombiano</b>, egresado del Bootcamp de <b>Academlo</b>.</p>
              <p>Con experiencia en desarrollo sólido en <b>.NET (C#)</b>, <b>React</b>, <b>Html</b>, <b>Css</b>, <b>jQuery</b>, <b>JavaScript</b>, manejo de versiones de <b>Git</b>, manejo estructura de base de datos <br/> <b>Sql Server</b> y <b>Oracle</b>.</p>
              <p>Mi objetivo es seguir creciendo profesionalmente, aprovechando cada oportunidad para expandir mis habilidades y conocimientos, y contribuir de manera significativa al desarrollo de proyectos tanto a soluciones que impacten positivamente en la sociedad.</p></div>
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
      </>
  )
}

export default SobreMi