import LearnMoreBtn from "../../components/LearnMoreBtn/LearnMoreBtn";
import Hero from "../../assets/images/herotab2x.jpg";
import { useState, useEffect } from "react";
import css from './Main.module.css'

const Main = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
        <div className={css.main_titleBlock}>
        <h1 className={css.main_title}>RENEWABLE ENERGY For any task</h1>
            <div className={css.main_textBlock}>
                <p>Development and implementation of renewable non-polluting energy sources, 
                    generating power generation using energy wind, sun, water, biomass</p>
                <LearnMoreBtn/>
            </div>
        </div>
        <div>
            <address>
                <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <p>office@ecosolution.com</p>
            </address>
            {windowWidth > 768 && <p>ecosolution © 2023</p>}
            <img src={`${Hero}`} alt='Wind turbine'/>
        </div>
        </section>
    )
};

export default Main;