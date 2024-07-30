import React from 'react';
import yo2 from "../../assets/img/yo2.png"
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className="aboutMe" id="aboutMe">

            <div className="fotoAboutMe">
                <img className="yo2" src={yo2} alt="" />
            </div>
            <div className="aboutMeDerecha">
                <h2 className="h2AboutMe">SOBRE MI</h2>
                <h1 className="h1AboutMe">
                    Conoce la Mente Creativa Detras de los Diseños
                </h1>

                <p className="pAboutMe">
                    Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alguna alteración, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si va a utilizar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Alguna forma, por disponible.

                </p>
                <div className="contenedorCuadraditos">
                    <div className="cuadraditos">
                        <h3 className="h3Cuadradito">
                            005+
                        </h3>

                        <p className="pCuadradito">
                            Proyectos Completados
                        </p>
                    </div>

                    <div className="cuadraditos">
                        <h3 className="h3Cuadradito">
                            01+
                        </h3>

                        <p className="pCuadradito">
                            Años de Experiencia
                        </p>
                    </div>

                    <div className="cuadraditos">
                        <h3 className="h3Cuadradito">
                            002+
                        </h3>

                        <p className="pCuadradito">
                            Clientes Felices
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;