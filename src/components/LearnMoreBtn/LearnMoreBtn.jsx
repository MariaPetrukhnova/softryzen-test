import { NavLink } from 'react-router-dom/dist';
import css from './LearnMoreBtn.module.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IconContext } from 'react-icons';

const LearnMoreBtn = () => {
    return (
        <NavLink to="/cases" className={css.btnLink}>
            <button className={css.contactBtn}>
                Learn more
                <div className={css.contactElement}>
                <IconContext.Provider value={{ color: "#173D33", size: "16px" }}> 
                    <IoIosArrowRoundForward/>
                </IconContext.Provider>
                </div>
            </button>
        </NavLink>
    )
};

export default LearnMoreBtn;