import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <section className="getInTouch" id="getInTouch">

            <h2 className="h2Portafolio centrado">CONTACTÁME</h2>

            <h1 className="h1MyServices centrado">Inicia una Conversacion Hoy</h1>

            <p className="pGetInTouch centrado">Bienvenido a nuestra cautivadora galería, donde cada clic cuenta una historia única, y Sumérgete en un viaje visual a través de paisajes impresionantes y retratos conmovedores.
            </p>

            <div className="cuadradoContacto">
                <h2 className="h2Contacto">Contactame</h2>

                <label for="" className="labelContacto" placeholer>Nombre</label>
                <input type="text" className="inputContacto" placeholder="Tu Nombre" />

                <label for="" className="labelContacto">Email</label>
                <input type="email" className="inputContacto" placeholder="Tu Email" />

                <label for="" className="labelContacto">Detalles de Negocios</label>
                <input type="text" className="inputContacto" placeholder="Ingresa Detalles de Negocios" />

                <label for="" className="labelContacto">Servicios Requeridos</label>
                <select className="inputContacto selectContacto" name="" id="" aria-placeholder="Select a Services">
                    <option value="" disabled selected>Selecciona un Servicio</option>
                    <option value="">Web Designer</option>
                    <option value="">Backend</option>
                </select>

                <button className="buttonContacto"><p className="pButton">Enviar Mensaje</p></button>

            </div>

        </section >
    );
}

export default GetInTouch;