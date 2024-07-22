import React from 'react';

const Footer = () => {
    return (
        <footer>

            <div class="containerFooter">

                {/* <!-- VdLabs --> */}
                <div class="topFooter">
                    <section class="VDLabs">
                        <h2 class="VDLabs textoFooter"> VDLabs</h2>
                        <p class="textoFooter pFooter pVDLabs">Bienvenido a nuestra cautivadora galería donde cada clic cuenta una historia única y sumérgete
                        </p>
                    </section>

                    {/* <!-- FollowMe --> */}
                    <section class="FollowMe">
                        <h2 class="h2Footer textoFooter fuenteArapeyFooter">Sigueme</h2>
                        {/* <!-- Facebook --> */}
                        <a class="aFooter" href=""><i class="fa-brands fa-facebook-f sMIFooter"></i></a>
                        {/* <!-- Twitter --> */}
                        <a class="aFooter" href=""><i class="bi bi-twitter sMIFooter"></i></a>
                        {/* <!-- Linkeding --> */}
                        <a class="aFooter" href=""><i class="fa-brands fa-linkedin-in sMIFooter"></i></a>
                        {/* <!-- Mundo? --> */}
                        <a class="aFooter" href=""><i class="bi bi-globe sMIFooter"></i></a>
                    </section>

                    {/* <!-- Contact --> */}
                    <section class="contactFooter">
                        <h2 class="h1Footer textoFooter fuenteArapeyFooter">Contactame</h2>
                        {/* <!-- Icono mail --> */}
                        <p class="textoFooter pFooter pMail"> <i class="fa-solid fa-envelope"></i> bruno.example@gmail.com</p>
                        {/* <!-- Icono Telefono / llamada --> */}
                        <p class="textoFooter pFooter"><i class="fa-solid fa-phone"></i> +54-9-261-123-7123</p>
                    </section>
                </div>

                <div class="bottomFooter">

                    {/* <!-- Nav Footer --> */}
                    <section>
                        <nav class="navFooter">
                            <a class="textoFooter aNavFooter" href="#hero">Inicio</a>
                            <a class="textoFooter aNavFooter" href="#aboutMe">Sobre Mi</a>
                            <a class="textoFooter aNavFooter" href="#myPortfolio">Portafolio</a>
                            <a class="textoFooter aNavFooter" href="#myServices">Servicios</a>
                            <a class="textoFooter aNavFooter" href="#mySkills">Habilidades</a>
                            <a class="textoFooter aNavFooter" href="#testimonial">Proyectos</a>
                        </nav>
                    </section>

                    <div class="textoFinal">
                        <p class="copyright">© 2024 Bruno. All Rights reserved.</p>
                        <p class="copyright tyc">Privacy Policy | Terms & Condition</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;