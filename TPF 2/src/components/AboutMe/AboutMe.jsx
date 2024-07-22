import React from 'react';
import yo2 from "../../assets/img/yo2.png"

const AboutMe = () => {
    return (
        <section class="aboutMe" id="aboutMe">

            <div class="fotoAboutMe">
                <img class="yo2" src={yo2} alt="" />
            </div>
            <div class="aboutMeDerecha">
                <h2 class="h2AboutMe">SOBRE MI</h2>
                <h1 class="h1AboutMe">
                    Conoce la Mente Creativa Detras de los Diseños
                </h1>

                <p class="pAboutMe">
                    Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alguna alteración, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si va a utilizar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Alguna forma, por disponible.

                </p>
                <div class="contenedorCuadraditos">
                    <div class="cuadraditos">
                        <h3 class="h3Cuadradito">
                            005+
                        </h3>

                        <p class="pCuadradito">
                            Proyectos Completados
                        </p>
                    </div>

                    <div class="cuadraditos">
                        <h3 class="h3Cuadradito">
                            01+
                        </h3>

                        <p class="pCuadradito">
                            Años de Experiencia
                        </p>
                    </div>

                    <div class="cuadraditos">
                        <h3 class="h3Cuadradito">
                            002+
                        </h3>

                        <p class="pCuadradito">
                            Clientes Felices
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;