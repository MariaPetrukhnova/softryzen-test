import css from "./Cases.module.css";
import { IoArrowBackOutline , IoArrowForwardOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
// import CasesArr from "./CasesArr";

const Cases = () => {
    return (
        <section className={css.cases_section}>
            <div className={css.cases_controlsBlock}>
                <h2 className={css.cases_title}>Successful cases of our company</h2>
                <div className={css.cases_counter}>
                    <span className={css.cases_count}>02</span>
                    <span className={css.cases_count}>/05</span>
                </div>
                <div className={css.cases_controls}>
                    <button className={css.cases_btn}>
                        <IconContext.Provider value={{ color: "#173D33", size: "36px" }}> 
                            <IoArrowBackOutline />
                        </IconContext.Provider>
                    </button>
                    <button className={css.cases_btn}>
                        <IconContext.Provider value={{ color: "#173D33", size: "36px" }}> 
                            <IoArrowForwardOutline />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
            <div className={css.cases_gallery}>

            </div>
        </section>
    )
};

export default Cases;