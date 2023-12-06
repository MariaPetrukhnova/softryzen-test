import Logo from "../header/Logo/Logo";
import css from './Footer.module.css'
import { IoIosArrowRoundUp } from "react-icons/io";
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import sprite from '../../assets/sprite3.svg';


const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <footer className={css.footer_section}>
            <div className={css.footer_linksBox}>
                <Logo className={css.footer_logo}/>
                <button className={css.arrowBtn} onClick={scrollToTop}>
                    <IconContext.Provider value={{ color: "#173D33", size: "16px" }}> 
                        <IoIosArrowRoundUp/>
                    </IconContext.Provider>
                    </button>
                <div className={css.footer_socials}>
                    <a target='_blank' href='https://www.facebook.com' rel="noreferrer noopener">
                        <svg className={css.social_icon}>
                            <use href={sprite + "#facebook"} />
                        </svg>
                    </a>
                    <a target='_blank' href='https://www.instagram.com' rel="noreferrer noopener">
                        <svg className={css.social_icon}>
                            <use href={sprite + "#instagram"} />
                        </svg>
                    </a>
                </div>
            </div>
            <div className={css.footer_contactsInfo}>
                <address className={css.footer_contacts}>
                    <p className={css.footer_adress}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    <p className={css.footer_mail}>office@ecosolution.com</p>
                </address>
                <p className={css.footer_copyright}>ecosolution © 2023</p>
            </div>
        </footer>
    )
};

export default Footer;