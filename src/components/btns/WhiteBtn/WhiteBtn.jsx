import { Link } from 'react-scroll';
import css from './WhiteBtn.module.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IconContext } from 'react-icons';

const WhiteBtn = ({nameBtn, relink}) => {
    return (<>
        <Link to={relink} spy={true} smooth={true}>
            <button className={css.contactBtn}>
                {nameBtn}
                <div className={css.contactElement}>
                <IconContext.Provider value={{ color: "#173D33", size: "16px" }}> 
                    <IoIosArrowRoundForward/>
                </IconContext.Provider>
                </div>
            </button>
        </Link>
        </>
    )
};

export default WhiteBtn;