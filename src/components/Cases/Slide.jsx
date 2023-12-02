import CasesArr from './CasesArr';
import css from "./Cases.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from 'react-icons';

const Slide = (currentSlide) => {


    const currentItem = CasesArr.filter(item => item.id===currentSlide.currentSlide);

    return(<article>
        {currentItem.map(({ id, imagemob, imageweb, title, description, date }) => (
        <div key={id} className={css.cases_slideItem}>
            <div className={css.cases_slideImgBox}>
                <img 
                    srcSet={`
                        ${imagemob} 480w,
                        ${imagemob} 768w,
                        ${imageweb} 1280w
                    `}
                    sizes="(max-width: 480px) 480px,
                                (max-width: 768px) 480px,
                                (max-width: 1280px) 348px
                                (min-width: 1280px) 596px"

                    src={`${imagemob}`}
                    alt={`Ecosolution case ${id}`}
                    className={css.cases_slideImg}/>
            </div>
            <div className={css.cases_slideInfo}>
                <div className={css.cases_slideHeader}>
                    <h6 className={css.cases_slideTitle}>{title}</h6>
                    <button className={css.cases_slideButton}>
                        <IconContext.Provider value={{ color: "#173D33", size: "28px" }}> 
                            <GoArrowUpRight />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className={css.cases_slideText}>
                    <p className={css.cases_slideDescription}>{description}</p>
                    <p className={css.cases_slideDate}>{date}</p>
                </div>
            </div>
        </div>
            ))}
        </article>
    )
};

export default Slide;