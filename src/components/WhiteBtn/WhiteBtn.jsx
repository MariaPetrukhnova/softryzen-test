import { NavLink } from 'react-router-dom/dist';
import css from './WhiteBtn.module.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IconContext } from 'react-icons';

const WhiteBtn = ({nameBtn, relink}) => {
    return (<>
        <NavLink to={relink}>
            <button className={css.contactBtn}>
                {nameBtn}
                <div className={css.contactElement}>
                <IconContext.Provider value={{ color: "#173D33", size: "16px" }}> 
                    <IoIosArrowRoundForward/>
                </IconContext.Provider>
                </div>
            </button>
        </NavLink>
        </>
    )
};

export default WhiteBtn;