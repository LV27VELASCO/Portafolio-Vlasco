import React from 'react'
import '../style/Portafolio.css'
import instacard from '../assets/img/Insta-clone.png'
import pokeapp from '../assets/img/Pokemon-app2.png'
import quotecard from '../assets/img/quote-machine.png'
import shoppingcard from '../assets/img/shopping-card.png'
import weathercard from '../assets/img/weather-app.png'
import RickandMorty from '../assets/img/Rick-and-morty.png'
const Portafolio = () => {
  return (
    <>
    <section id='Portafolio' className='portafolio'>
        <div className='title-portafolio'>
          <h2>Portafolio</h2>
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

          <div className="card">
            <img src={RickandMorty} />
            <a href="https://veloc-rick-and-morty-api.netlify.app" target='_blank'>
              <div className='description-card'>
                <h3>Rick And Morty Wiki</h3>
                <p>Una wikipedia de la serie Rick And Morty donde puedes buscar a traves de dimensiones, los personajes que residen 
                  en ellas y a su vez ver características
                   de esos personajes. <br/>
                   Se implementó REACT y CSS para este proyecto.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      </>
  )
}

export default Portafolio