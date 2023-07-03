import React, { useState } from 'react'
import Form from './Form'
import '../style/Contacto.css'
const Contacto = () => {
    const [btnActive, setBtnActive] = useState(false)
    const click = () => {
        if (btnActive) {
          setBtnActive(false)
        } else {
          setBtnActive(true)
        }
      }
  return (
    <>
    <section id='Contacto' className='contacto'>
        <div className='container-contacto'>
          <div className='title-contact'>
            <h3>Contacto</h3>
          </div>
          <div className='contact-means'>
            <div className='info'>
              <i className='bx bx-devices'></i>
              <div className='contacting'>
                <h3>Phone</h3>
                <p>+57 314 660 5344</p>
              </div>
            </div>
            <div className='info'>
              <i className='bx bxs-envelope-open'></i>
              <div className='contacting'>
                <h3>Email</h3>
                <p>leduvelasco@gmail.com</p>
              </div>
            </div>
            <div className='info'>
              <i className='bx bx-current-location bx-rotate-90'></i>
              <div className='contacting'>
                <h3>Adress</h3>
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
      </>
  )
}

export default Contacto