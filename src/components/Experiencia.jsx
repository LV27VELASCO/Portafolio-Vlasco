import React from 'react'
import NET from '../assets/img/Csharp.png'
import '../style/Experiencia.css'
const Experiencia = () => {
  return (
    <>
    <section id='Experiencia' className='habilidades' >
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
              <h3>Politécnico GranColombiano</h3>
              <span>Actualmente</span>
              <p>Ingeniería de Sofware</p>
            </div>
            <div className='data'>
              <h3>Academlo</h3>
              <span>2022</span>
              <p>Desarrollo Web Full-Stack</p>
            </div>
            <div className='data'>
              <h3>SENA</h3>
              <span>2020</span>
              <p>Gestión Bancaria y Entidades Financieras</p>
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
              <span>Oct 2022 - Actualidad</span>
              <p>Analista de Sistemas de Información</p>
            </div>
            <div className='data'>
              <h3>Banco Serfinanza</h3>
              <span>Sep 2020 - Oct 2022</span>
              <p>Aux Comercial</p>
            </div>
          </div>

          <div className='skills'>
            <div className='contain-icon-hability'>
              <div className='icon'>
                <i className='bx bx-code-alt'></i>
              </div>
              <div className='hability'>
                <h3>Conocimientos</h3>
              </div>
            </div>
            <div className='contain-programs'>
              <div className='programs'>
                <h4>HTML</h4>
                <div className='icon-hability'>
                  <i className='bx bxl-html5' id='html'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>CSS</h4>
                <div className='icon-hability'>
                  <i className='bx bxl-css3' id='css'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>JavaScript</h4>

                <div className='icon-hability'>
                  <i className='bx bxl-javascript' id='javascript'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>Node Js</h4>

                <div className='icon-hability'>
                  <i className='bx bxl-nodejs' id='nodejs'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>.NET (C#)</h4>
                <div className='icon-hability'>
                  <img src={NET} id='net' alt='Csharp'/>
                </div>
              </div>
              <div className='programs'>
                <h4>React</h4>

                <div className='icon-hability'>
                  <i className='bx bxl-react' id='react'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>Git</h4>
                <div className='icon-hability'>
                <i className='bx bxl-git'id='git'></i>
                </div>
              </div>
              <div className='programs'>
                <h4>Redux</h4>
                <div className='icon-hability'>
                  <i className='bx bxl-redux' id='redux'></i>
                </div>
              </div>
              {/* <div className='programs'>
                <h4>Docker</h4>
                <div className='icon-hability'>
                <i className='bx bxl-docker' id='docker'></i>
                </div>
              </div> */}
              <div className='programs'>
                <h4>SQL / Oracle</h4>
                <div className='icon-hability'>
                <i className='bx bxs-data' id='dataBase'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiencia