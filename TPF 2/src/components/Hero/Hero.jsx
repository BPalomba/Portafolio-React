import { Box } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
    return (

        <Box class="hero" id="hero" w={"100vw"} bg="#FAFAFA">

            <h2 class="h2Hero">
                HOLA 👋
            </h2>
            <h1 class="h1Hero">Soy Bruno Palombarini Diseñador UI/UX</h1>


            <a href="#getInTouch" class="aHero">
                <i class="bi bi-envelope mailIcon"></i>
                Contratame
            </a>

            <a href="#myPortfolio" class="aHero">
                Ver Portafolio
            </a>

            <div class="parrafoHero">
                <i class="bi bi-quote quoteUp comillas"></i>
                <p class="pHero">
                    Bienvenido a la intersección de la creatividad y la tecnología. Como diseñador de interfaces creativas experimentado, me especializo en crear experiencias digitales que sean estéticamente agradables y muy intuitivas.
                    <i class="bi bi-quote quoteDown comillas"></i>
                </p>
            </div>


        </Box>

    );
}

export default Hero;