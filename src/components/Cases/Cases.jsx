import css from "./Cases.module.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IconContext } from 'react-icons';
import Slide from "./Slide";
import { useState, useEffect } from "react";

const Cases = () => {

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

    const [slideNum, setSlideNum] = useState(1)
    const [secSlide, setSecSlide] = useState(2)

    const handleBackClick = () => {
        setSlideNum(slideNum-1);
        setSecSlide(secSlide-1)
        if(slideNum<=1) {setSlideNum(5)}
        if(secSlide<=1) {setSecSlide(5)}
    }

    const handleForwardClick = () => {
        setSlideNum(slideNum+1)
        setSecSlide(secSlide+1)
        if(slideNum>=5) {setSlideNum(1)}
        if(secSlide>=5) {setSecSlide(1)}
    }

    return (
        <section className={css.cases_section}  id='cases'>
            <div className={css.cases_controlsBlock}>
                <h2 className={css.cases_title}>Successful cases of our company</h2>
                <div className={css.cases_counter}>
                    <span className={css.cases_count}>{`0${slideNum}`}</span>
                    <span className={css.cases_count}>/05</span>
                </div>
                <div className={css.cases_controls}>
                    <button className={css.cases_btn} onClick={handleBackClick}>
                        <IconContext.Provider value={{ color: "#173D33", size: "36px" }}> 
                            <GoArrowLeft/>
                        </IconContext.Provider>
                    </button>
                    <button className={css.cases_btn} onClick={handleForwardClick}>
                        <IconContext.Provider value={{ color: "#173D33", size: "36px" }}> 
                            <GoArrowRight/>
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
            <ul className={css.cases_gallery}>
                <li>
                    <Slide currentSlide={slideNum}/>
                </li>
                {windowWidth > 768 &&
                <li>
                    <Slide currentSlide={secSlide}/>
                </li>}
            </ul>
        </section>
    )
};

export default Cases;