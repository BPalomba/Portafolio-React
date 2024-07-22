import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <Box display={"flex"} alignItems={"center"} w="100%" bg="#FAFAFA" marginTop="2vh">


                <Text px={"15px"} marginLeft="15px" class="mm">BP</Text>
                <Box class="topNav" marginX={"auto"}   >

                    <Link mx={"1vw"} padding="5px" href="#hero" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid">Inicio</Link>
                    <Link mx={"1vw"} padding="5px" href="#aboutMe" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid">Sobre Mi</Link>
                    <Link mx={"1vw"} padding="5px" href="#myPortfolio" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid">Portafolio</Link>
                    <Link mx={"1vw"} padding="5px" href="#mySkills" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid">Habilidades</Link>
                    <Link mx={"1vw"} padding="5px" href="#testimonial" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid">Proyectos</Link>
                    <Link mx={"1vw"} padding="5px" href="#myServices" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" border="transparent , 2px , solid" >Servicios</Link>

                </Box>
                <Link href="#getInTouch" class="contactMe" _hover={{ border: "solid, gray , 2px" }} borderRadius="5px" marginRight={"30px"} border="transparent , 2px , solid" padding="5px">Contáctame</Link>
            </Box>
        </header>
    );
}

export default Header;