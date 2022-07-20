import React from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2abzk6f','template_wmmsmob',e.target,'7soZBk7184DOEC3tT')
        .then(res => console.log(res))
        .cach(err => console.log(err))
    }

  return (
    <>
    <form  onSubmit={sendMessage} className='form'>
        <div className='contain-input'>

        <label htmlFor="#user_name" className='the-title'>Name</label>
        <input type="text" id='user_name' name='user_name' className='the-input' placeholder='Your name' required minLength={3} maxLength={20}/>

        <label htmlFor="#user_email" className='the-title'>Email</label>
        <input type="email" id='user_email' name='user_email' className='the-input' placeholder='Your email' required/>

        <label htmlFor="#user_message"  className='the-title'>Message</label>
        <textarea type="text" id='user_message' name='user_message' required/>
        </div>
        <button className='enviar'> <i className='bx bxs-send' ></i></button>
    </form>
    </>
  )
}

export default Form