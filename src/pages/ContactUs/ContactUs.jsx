import css from './ContactUs.module.css';
import ContactForm from './ContactForm';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { IconContext } from 'react-icons';
import { LuPhone } from "react-icons/lu";
import { IoMailOutline, IoMapOutline  } from "react-icons/io5";

const ContactUs = () => {

    return(
        <section className={css.contacts_section}>
            <h2 className={css.contacts_title}>Contact us</h2>
            <div className={css.contacts_sectionBox}>
                <address className={css.contacts_infoBlock}>
                    <p className={css.contacts_subtitle}>Phone:</p>
                    <div className={css.contacts_infoItem}>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                            <LuPhone/>
                        </IconContext.Provider>
                        <p className={css.contacts_infoText}>38 (098) 12 34 567</p>
                    </div>
                    <div className={css.contacts_infoItem}>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                            <LuPhone/>
                        </IconContext.Provider>
                        <p className={css.contacts_infoText}>38 (093) 12 34 567</p>
                    </div>
                    <p className={css.contacts_subtitle}>Email:</p>
                    <div className={css.contacts_infoItem}>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                            <IoMailOutline/>
                        </IconContext.Provider>
                        <p className={css.contacts_infoText}>office@ecosolution.com</p>
                    </div>
                    <p className={css.contacts_subtitle}>Adress:</p>
                    <div className={css.contacts_infoItem}>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                            <IoMapOutline/>
                        </IconContext.Provider>
                    <p className={css.contacts_infoText}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    </div>
                    <p className={css.contacts_subtitle}>Social Networks:</p>
                    <div className={css.contacts_socials}>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px" }}> 
                            <IoLogoFacebook/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#173D33", size: "24px", className: `${css.insta_Icon}` }}> 
                            <IoLogoInstagram/>
                        </IconContext.Provider>
                    </div>
                </address>
                <ContactForm className={css.contacts_formBox}/>
            </div>
        </section>
    )
}
; export default ContactUs;
