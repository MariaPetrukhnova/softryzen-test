import WhiteBtn from "../../components/btns/WhiteBtn/WhiteBtn";
import Hero from "../../components/ImgSets/HeroImg";
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

    const mainBtn = 'LearnMore';
    const relink = 'cases';

    return (
        <section className={css.main_section} id='main'>
        <div className={css.main_titleBlock}>
        <h1 className={css.main_title}>RENEWABLE ENERGY For any task</h1>
            <div className={css.main_textBlock}>
                <p className={css.main_text}>Development and implementation of renewable non-polluting energy sources, 
                    generating power generation using energy wind, sun, water, biomass</p>
                <WhiteBtn nameBtn={mainBtn} relink={relink}/>
            </div>
        </div>
        <div className={css.main_contactsInfo}>
            <address className={css.main_contacts}>
                <p className={css.main_adress}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <p className={css.main_mail}>office@ecosolution.com</p>
            </address>
            {windowWidth > 768 && <p className={css.main_copyright}>ecosolution © 2023</p>}
        </div>
            <Hero/>
        </section>
    )
};

export default Main;