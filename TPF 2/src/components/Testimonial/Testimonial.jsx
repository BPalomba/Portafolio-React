import React from 'react';

const Testimonial = () => {
    return (
        <section class="testimonial" id="testimonial">




            <div class="contenedorComillas">
                <div>
                    <h2 class="h2Portafolio">
                        TESTIMONIAL
                    </h2>
                    <h1 class="h1MyServices">
                        Reseñas de mis Clientes
                    </h1>
                </div>
                <i class="bi bi-quote quoteDown comillas comillasTestimonial"></i>
            </div>
            <div class="containerTestimonial">

                <div>
                    <img class="imgTestimonial" src="img/fotocliente.png" alt="" />
                </div>

                <div class="textoTestimonial">

                    <h3 class="h3Testimonial">
                        Bruno Palombarini es un creativo diseñador UI/UX y el es simplemente asombroso.
                    </h3>

                    <p class="pTestimonial">
                        Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alguna alteración, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si va a utilizar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Alguna forma, por disponible.
                    </p>

                    <div class="containerClienteFlechas">

                        <div class="textoCliente">

                            <h3 class="h3Testimonial oscurito">
                                Esther Howard
                            </h3>

                            <p class="pTestimonial">
                                Fundador
                            </p>
                        </div>
                        {/* <!-- Flechitas --> */}
                        <div class="divFlechitas">
                            <button class="flechas fondoBlanco">
                                <i class="bi bi-arrow-left-circle-fill big"></i>
                            </button>

                            <button class="flechas fondoBlanco">
                                <i class="bi bi-arrow-right-circle-fill big"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;