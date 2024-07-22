import React from 'react';
import uiux from '../../assets/img/uiux.png'
import pen from '../../assets/img/pen.png'
import web from '../../assets/img/web.png'

const MyServices = () => {
    return (
        <section class="myServices" id="myServices">

            <div class="headerServices">
                <h2 class="h2MyServices">
                    MIS SERVICIOS
                </h2>

                <h1 class="h1MyServices">
                    Tu Negocio mi Rango de Servicios
                </h1>

                <p class="pMyServices pAncho">
                    Bienvenido al lienzo digital donde su visión se encuentra con la innovación. Soy un Diseñador de Interfaces <br></br> Creativo, dedicado a transformar ideas en realidades interactivas.
                </p>
            </div>
            <div class="contenedorServices">
                <div class="services">
                    {/* <!-- Agregar icono o imagen  --> */}
                    <img src={uiux} alt="" class="servicesImg" />
                    <h1 class="h1Services">
                        Diseño de UI/UX
                    </h1>
                    <p class="pMyServices">
                        Bienvenido a nuestra galería cautivadora, donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato de corazón y diseño es una galería fascinante, cada uno de nuestros diseños y ui / ux.
                    </p>
                    <a class="aServices" href="">Leer Más</a>
                </div>
                <div class="services">


                    <img src={pen} alt="" class="servicesImg" />
                    <h1 class="h1Services">
                        Diseño de APP
                    </h1>
                    <p class="pMyServices">
                        Bienvenido a nuestra galería cautivadora, donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato de corazón y diseño es una galería fascinante, cada uno de nuestros diseños y ui / ux.

                    </p>

                    <a class="aServices" href="">Leer Más</a>

                </div>
                <div class="services">


                    <img src={web} alt="" class="servicesImg" />

                    <h1 class="h1Services">
                        Diseño Web
                    </h1>
                    <p class="pMyServices">
                        Bienvenido a nuestra galería cautivadora, donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato sincero es fascinante en momentos y una galería cautivadora de diseño donde cada retrato de corazón y diseño es una galería fascinante, cada uno de nuestros diseños y ui / ux.
                    </p>

                    <a class="aServices" href="https://www.google.com/search?q=fotos+de+gatitos+&tbm=isch&ved=2ahUKEwiY6Y-2_a2GAxUqrJUCHX3_CVkQ2-cCegQIABAA&oq=fotos+de+gatitos+&gs_lp=EgNpbWciEWZvdG9zIGRlIGdhdGl0b3MgMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjGGFDsBFiqE3AAeACQAQCYAY8BoAG8C6oBBDE2LjK4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBBAjGCfCAgYQABgIGB7CAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICCBAAGIAEGLEDiAYB&sclient=img&ei=S5BUZtiXHqrY1sQP_f6nyAU&bih=957&biw=1920&rlz=1C1VDKB_esAR1036AR1036">Leer Más</a>
                </div>
            </div>
        </section>
    );
}

export default MyServices;