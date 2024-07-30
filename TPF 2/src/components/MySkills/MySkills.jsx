import React from 'react';
import html from "../../assets/icons/html.svg"
import css from "../../assets/icons/css.svg"
import cpp from "../../assets/icons/cpp.svg"
import java from "../../assets/icons/java.svg"
import './MySkills.css'

const MySkills = () => {
    return (
        <section class="mySkills" id="mySkills">
            <h2 class="h2MyServices">
                MIS HABILIDADES
            </h2>

            <h1 class="h1MyServices">
                Mis Asombrosas Habilidades
            </h1>
            <p class="pMyServices pAncho">
                Bienvenido al lienzo digital donde su visión se encuentra con la innovación. Soy un Diseñador <br /> de Interfaces Creativo, dedicado a transformar ideas en realidades interactivas.
            </p>

            <div class="skillsContainer">

                <div class="skillCuadradito">
                    <img class="imgSkill" src={html} alt="tecnologia" />
                    <p class="pSkill">HTML</p>
                </div>

                <div class="skillCuadradito">
                    <img class="imgSkill" src={css} alt="tecnologia" />
                    <p class="pSkill">CSS</p>
                </div>

                <div class="skillCuadradito">
                    <img class="imgSkill" src={cpp} alt="tecnologia" />
                    <p class="pSkill">C++</p>
                </div>

                <div class="skillCuadradito">
                    <img class="imgSkill" src={java} alt="tecnologia" />
                    <p class="pSkill">Java</p>
                </div>


            </div>

        </section>
    );
}

export default MySkills;