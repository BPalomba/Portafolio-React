import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className="containerFooter">

                {/* <!-- VdLabs --> */}
                <div className="topFooter">
                    <section className="VDLabs">
                        <h2 className="VDLabs textoFooter"> VDLabs</h2>
                        <p className="textoFooter pFooter pVDLabs">Bienvenido a nuestra cautivadora galería donde cada clic cuenta una historia única y sumérgete
                        </p>
                    </section>

                    {/* <!-- FollowMe --> */}
                    <section className="FollowMe">
                        <h2 className="h2Footer textoFooter fuenteArapeyFooter">Sigueme</h2>
                        {/* <!-- Facebook --> */}
                        <a className="aFooter" href=""><i className="fa-brands fa-facebook-f sMIFooter"></i></a>
                        {/* <!-- Twitter --> */}
                        <a className="aFooter" href=""><i className="bi bi-twitter sMIFooter"></i></a>
                        {/* <!-- Linkeding --> */}
                        <a className="aFooter" href=""><i className="fa-brands fa-linkedin-in sMIFooter"></i></a>
                        {/* <!-- Mundo? --> */}
                        <a className="aFooter" href=""><i className="bi bi-globe sMIFooter"></i></a>
                    </section>

                    {/* <!-- Contact --> */}
                    <section className="contactFooter">
                        <h2 className="h1Footer textoFooter fuenteArapeyFooter">Contactame</h2>
                        {/* <!-- Icono mail --> */}
                        <p className="textoFooter pFooter pMail"> <i className="fa-solid fa-envelope"></i> bruno.example@gmail.com</p>
                        {/* <!-- Icono Telefono / llamada --> */}
                        <p className="textoFooter pFooter"><i className="fa-solid fa-phone"></i> +54-9-261-123-7123</p>
                    </section>
                </div>

                <div className="bottomFooter">

                    {/* <!-- Nav Footer --> */}
                    <section>
                        <nav className="navFooter">
                            <a className="textoFooter aNavFooter" href="#hero">Inicio</a>
                            <a className="textoFooter aNavFooter" href="#aboutMe">Sobre Mi</a>
                            <a className="textoFooter aNavFooter" href="#myPortfolio">Portafolio</a>
                            <a className="textoFooter aNavFooter" href="#myServices">Servicios</a>
                            <a className="textoFooter aNavFooter" href="#mySkills">Habilidades</a>
                            <a className="textoFooter aNavFooter" href="#testimonial">Proyectos</a>
                        </nav>
                    </section>

                    <div className="textoFinal">
                        <p className="copyright">© 2024 Bruno. All Rights reserved.</p>
                        <p className="copyright tyc">Privacy Policy | Terms & Condition</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;