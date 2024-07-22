import React from 'react';
import sittingPerson from '../../assets/img/sittingperson.png'
import styles from './Animation.module.css';

const Animation = () => {
    return (
        <section className={styles.slider}>
            <div className={styles.slideTrack}>
                <div className={styles.slide}>
                    <p class="pSlider">UI/UX DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">GRAPHIC DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">APPS DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">WIREFRAME DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                    //
                </div>

                {/* <!-- Divs duplicados --> */}

                <div className={styles.slide}>
                    <p class="pSlider">UI/UX DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">GRAPHIC DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">APPS DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>
                <div className={styles.slide}>
                    <p class="pSlider">WIREFRAME DESIGN</p>
                    <img class="imgBanda" src={sittingPerson} alt="" />
                </div>




            </div>


        </section>
    );
}

export default Animation;