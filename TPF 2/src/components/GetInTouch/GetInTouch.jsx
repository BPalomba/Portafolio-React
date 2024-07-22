import React from 'react';

const GetInTouch = () => {
    return (
        <section class="getInTouch" id="getInTouch">

            <h2 class="h2Portafolio centrado">CONTACTÁME</h2>

            <h1 class="h1MyServices centrado">Inicia una Conversacion Hoy</h1>

            <p class="pGetInTouch centrado">Bienvenido a nuestra cautivadora galería, donde cada clic cuenta una historia única, y Sumérgete en un viaje visual a través de paisajes impresionantes y retratos conmovedores.
            </p>

            <div class="cuadradoContacto">
                <h2 class="h2Contacto">Contactame</h2>

                <label for="" class="labelContacto" placeholer>Nombre</label>
                <input type="text" class="inputContacto" placeholder="Tu Nombre" />

                <label for="" class="labelContacto">Email</label>
                <input type="email" class="inputContacto" placeholder="Tu Email" />

                <label for="" class="labelContacto">Detalles de Negocios</label>
                <input type="text" class="inputContacto" placeholder="Ingresa Detalles de Negocios" />

                <label for="" class="labelContacto">Servicios Requeridos</label>
                <select class="inputContacto selectContacto" name="" id="" aria-placeholder="Select a Services">
                    <option value="" disabled selected>Selecciona un Servicio</option>
                    <option value="">Web Designer</option>
                    <option value="">Backend</option>
                </select>

                <button class="buttonContacto"><p class="pButton">Enviar Mensaje</p></button>

            </div>

        </section >
    );
}

export default GetInTouch;