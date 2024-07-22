import React from 'react';

const MyPortfolio = () => {
    return (
        <section class="myPortfolio" id="myPortfolio">
            <h2 class="h2MyServices h2Portafolio">
                MI PORTAFOLIO
            </h2>

            <h1 class="h1MyServices">
                Mis Impresionantes Proyectos
            </h1>

            <h3 class="h3Portfolio">
                Bienvenido al lienzo digital donde su visión se encuentra con la innovación. Soy un Diseñador de Interfaces Creativo, dedicado a transformar ideas en realidades interactivas.

            </h3>

            <div class="buttonBar">
                <button class="buttonPortfolio">
                    Todo
                </button>

                <button class="buttonPortfolio">
                    Diseño Web
                </button>

                <button class="buttonPortfolio">
                    Diseño Grafico
                </button>

                <button class="buttonPortfolio">
                    Marcas
                </button>

                <button class="buttonPortfolio">
                    Tablero
                </button>
            </div>

            {/* <!-- Carrusel --> */}
            <div class="containerCarrusel" id="containerCarrusel">

                <div class="cuadradosCarrusel">

                    <img class="imgCarrusel" src="img/proyecto1.png" alt="" />
                    <h1 class="h1Services h1Carrusel">Services Web Design </h1>
                    <p class="pServices pCarrusel">Website/Landing page</p>
                    <i class="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>
                </div>

                <div class="cuadradosCarrusel">

                    <img class="imgCarrusel " src="img/bakery.png" alt="" />
                    <h1 class="h1Services h1Carrusel">Bakery Website Design</h1>
                    <p class="pServices pCarrusel">Website/Landing page</p>
                    <i class="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>

                </div>

                <div class="cuadradosCarrusel">

                    <img class="imgCarrusel carruselLoginPage" src="img/proyecto2.png" alt="" />
                    <h1 class="h1Services h1Carrusel">Login Website Design </h1>
                    <p class="pServices pCarrusel">Website/Landing page</p>
                    <i class="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>
                </div>

                <div class="cuadradosCarrusel">

                    <img class="imgCarrusel" src="img/coffemachine.png" alt="" />
                    <h1 class="h1Services h1Carrusel">Bakery Website Design </h1>
                    <p class="pServices pCarrusel">Website/Landing page</p>
                    <i class="bi bi-arrow-up-right-circle-fill iconoFlechaDiagonal"></i>

                </div>
            </div>
            {/* <!-- Fin carrusel --> */}

            {/* <!-- Flechitas --> */}
            <div class="containerFlechasPortfolio">
                <button class="flechas"><i class="bi bi-arrow-left-circle-fill iconoFlechaHorizontal"></i></button>

                <button class="flechas"><i class="bi bi-arrow-right-circle-fill iconoFlechaHorizontal"></i></button>
            </div>

        </section>
    );
}

export default MyPortfolio;