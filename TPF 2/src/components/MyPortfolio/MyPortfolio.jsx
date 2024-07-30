import React from 'react';
import './MyPortfolio.css'
import proyecto1 from "../../assets/img/proyecto1.png"
import bakery from "../../assets/img/bakery.png"
import proyecto2 from "../../assets/img/proyecto2.png"
import coffemachine from "../../assets/img/coffemachine.png"

const MyPortfolio = () => {
    return (
        <section className="myPortfolio" id="myPortfolio">
            <h2 className="h2MyServices h2Portafolio">
                MI PORTAFOLIO
            </h2>

            <h1 className="h1MyServices">
                Mis Impresionantes Proyectos
            </h1>

            <h3 className="h3Portfolio">
                Bienvenido al lienzo digital donde su visión se encuentra con la innovación. Soy un Diseñador de Interfaces Creativo, dedicado a transformar ideas en realidades interactivas.

            </h3>

            <div className="buttonBar">
                <button className="buttonPortfolio">
                    Todo
                </button>

                <button className="buttonPortfolio">
                    Diseño Web
                </button>

                <button className="buttonPortfolio">
                    Diseño Grafico
                </button>

                <button className="buttonPortfolio">
                    Marcas
                </button>

                <button className="buttonPortfolio">
                    Tablero
                </button>
            </div>

            {/* <!-- Carrusel --> */}
            <div className="containerCarrusel" id="containerCarrusel">

                <div className="cuadradosCarrusel">

                    <img className="imgCarrusel" src={proyecto1} alt="" />
                    <h1 className="h1Services h1Carrusel">Services Web Design </h1>
                    <p className="pServices pCarrusel">Website/Landing page</p>
                    <i className="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>
                </div>

                <div className="cuadradosCarrusel">

                    <img className="imgCarrusel " src={bakery} alt="" />
                    <h1 className="h1Services h1Carrusel">Bakery Website Design</h1>
                    <p className="pServices pCarrusel">Website/Landing page</p>
                    <i className="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>

                </div>

                <div className="cuadradosCarrusel">

                    <img className="imgCarrusel carruselLoginPage" src={proyecto2} alt="" />
                    <h1 className="h1Services h1Carrusel">Login Website Design </h1>
                    <p className="pServices pCarrusel">Website/Landing page</p>
                    <i className="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>
                </div>

                <div className="cuadradosCarrusel">

                    <img className="imgCarrusel" src={coffemachine} alt="" />
                    <h1 className="h1Services h1Carrusel">Bakery Website Design </h1>
                    <p className="pServices pCarrusel">Website/Landing page</p>
                    <i className="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>

                </div>
            </div>
            {/* <!-- Fin carrusel --> */}

            {/* <!-- Flechitas --> */}
            <div className="containerFlechasPortfolio">
                <button className="flechas"><i className="bi bi-arrow-left-circle-fill iconoFlechaHorizontal"></i></button>

                <button className="flechas"><i className="bi bi-arrow-right-circle-fill iconoFlechaHorizontal"></i></button>
            </div>

        </section>
    );
}

export default MyPortfolio;