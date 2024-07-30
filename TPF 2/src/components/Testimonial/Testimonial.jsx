import React from 'react';
import './Testimonial.css'
import fotocliente from "../../assets/img/fotocliente.png"

const Testimonial = () => {
    return (
        <section className="testimonial" id="testimonial">




            <div className="contenedorComillas">
                <div>
                    <h2 className="h2Portafolio">
                        TESTIMONIAL
                    </h2>
                    <h1 className="h1MyServices">
                        Reseñas de mis Clientes
                    </h1>
                </div>
                <i className="bi bi-quote quoteDown comillas comillasTestimonial"></i>
            </div>
            <div className="containerTestimonial">

                <div>
                    <img className="imgTestimonial" src={fotocliente} alt="" />
                </div>

                <div className="textoTestimonial">

                    <h3 className="h3Testimonial">
                        Bruno Palombarini es un creativo diseñador UI/UX y el es simplemente asombroso.
                    </h3>

                    <p className="pTestimonial">
                        Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alguna alteración, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si va a utilizar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Alguna forma, por disponible.
                    </p>

                    <div className="containerClienteFlechas">

                        <div className="textoCliente">

                            <h3 className="h3Testimonial oscurito">
                                Esther Howard
                            </h3>

                            <p className="pTestimonial">
                                Fundador
                            </p>
                        </div>
                        {/* <!-- Flechitas --> */}
                        <div className="divFlechitas">
                            <button className="flechas fondoBlanco">
                                <i className="bi bi-arrow-left-circle-fill big"></i>
                            </button>

                            <button className="flechas fondoBlanco">
                                <i className="bi bi-arrow-right-circle-fill big"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;