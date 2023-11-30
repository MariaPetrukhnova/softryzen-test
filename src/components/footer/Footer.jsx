import Logo from "../header/Logo";
import css from './Footer.module.css'
import { IoIosArrowRoundUp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <footer className={css.footer_section}>
            <div className={css.footer_linksBox}>
                <Logo className={css.footer_logo}/>
                <button className={css.arrowBtn}>
                    <IconContext.Provider value={{ color: "#173D33", size: "16px" }}> 
                        <IoIosArrowRoundUp/>
                    </IconContext.Provider>
                    </button>
                <div className={css.footer_socials}>
                    <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                        <IoLogoFacebook/>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "#173D33", size: "24px", className: `${css.insta_Icon}` }}> 
                        <IoLogoInstagram/>
                    </IconContext.Provider>
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