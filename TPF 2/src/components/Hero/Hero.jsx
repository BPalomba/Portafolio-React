import { Box } from '@chakra-ui/react';
import React from 'react';
import './Hero.css'

const Hero = () => {
    return (

        <Box className="hero" id="hero" w={"100vw"} bg="#FAFAFA">

            <h2 className="h2Hero">
                HOLA 👋
            </h2>
            <h1 className="h1Hero">Soy Bruno Palombarini Diseñador UI/UX</h1>


            <a href="#getInTouch" className="aHero">
                <i className="bi bi-envelope mailIcon"></i>
                Contratame
            </a>

            <a href="#myPortfolio" className="aHero">
                Ver Portafolio
            </a>

            <div className="parrafoHero">
                <i className="bi bi-quote quoteUp comillas"></i>
                <p className="pHero">
                    Bienvenido a la intersección de la creatividad y la tecnología. Como diseñador de interfaces creativas experimentado, me especializo en crear experiencias digitales que sean estéticamente agradables y muy intuitivas.
                    <i className="bi bi-quote quoteDown comillas"></i>
                </p>
            </div>


        </Box>

    );
}

export default Hero;