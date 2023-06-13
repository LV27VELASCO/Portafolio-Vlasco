import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const onEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yezwe9gz",
        "template_7y4e5mk",
        e.target,
        "sHTQkeYpVBiLWd-jA"
      )
      .then((res) => {
        alert("Mensaje enviado correctamente");
      })
      .cach((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={onEmail} className="form" id="formulario">
        <div className="contain-input">
          <div className="contain-section-input">
            <div className="section-input">
              <div className="input-data">
                <label htmlFor="#user_name" className="the-title">
                  Nombre
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  autoComplete="off"
                  placeholder="Your name"
                  required
                  minLength={3}
                  maxLength={15}
                />
              </div>
              <div className="input-data">
                <label htmlFor="#user_last_name" className="the-title">
                  Apellido
                </label>
                <input
                  type="text"
                  id="user_last_name"
                  name="user_last_name"
                  autoComplete="off"
                  placeholder="Your last name"
                  required
                  minLength={3}
                  maxLength={18}
                />
              </div>
            </div>
            <div className="section-input">
              <div className="input-data">
                <label htmlFor="#user_email" className="the-title">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  autoComplete="off"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="input-data">
                <label htmlFor="#user_phone" className="the-title">
                  Celular
                </label>
                <input
                  type="number"
                  className="input_number"
                  id="user_phone"
                  name="user_phone"
                  autoComplete="off"
                  placeholder="Your phone number"
                  minLength={10}
                  maxLength={16}
                />
              </div>
            </div>
          </div>
          <div className="contain-textarea">
            <label htmlFor="#user_message" className="the-title">
              Mensaje
            </label>
            <textarea
              type="text"
              id="user_message"
              name="user_message"
              autoComplete="off"
              required
              placeholder="Your message"
            />
          </div>
        </div>
        <button className="enviar">
          <i className="bx bxs-send"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
