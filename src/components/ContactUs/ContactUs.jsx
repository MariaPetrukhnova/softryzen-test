import css from './ContactUs.module.css';
import ContactForm from './ContactForm';
import sprite from '../../assets/sprite3.svg';
import { IconContext } from 'react-icons';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";

const ContactUs = () => {

    return(
        <section className={css.contacts_section} id='contact'>
            <h2 className={css.contacts_title}>Contact us</h2>
            <div className={css.contacts_sectionBox}>
                <address className={css.contacts_infoBlock}>
                    <p className={css.contacts_subtitle}>Phone:</p>
                    <div className={css.contacts_infoItem}>
                        <svg className={css.contacts_icon}>
                            <use href={sprite + "#call"} />
                        </svg>
                        <p className={css.contacts_infoText}>38 (098) 12 34 567</p>
                    </div>
                    <div className={css.contacts_infoItem}>
                        <svg className={css.contacts_icon}>
                            <use href={sprite + "#call"} />
                        </svg>
                        <p className={css.contacts_infoText}>38 (093) 12 34 567</p>
                    </div>
                    <p className={css.contacts_subtitle}>Email:</p>
                    <div className={css.contacts_infoItem}>
                        <svg className={css.contacts_icon}>
                            <use href={sprite + "#sms"} />
                        </svg>
                        <p className={css.contacts_infoText}>office@ecosolution.com</p>
                    </div>
                    <p className={css.contacts_subtitle}>Adress:</p>
                    <div className={css.contacts_infoItem}>
                        <svg className={css.contacts_icon}>
                            <use href={sprite + "#map"} />
                        </svg>
                    <p className={css.contacts_infoText}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    </div>
                    <p className={css.contacts_subtitle}>Social Networks:</p>
                    <div className={css.contacts_socials}>
                        <a target='_blank' href='https://www.facebook.com' rel="noreferrer noopener">
                            <IconContext.Provider value={{ color: "#173D33", size: "24px", className: `${css.social_icon}` }}> 
                                <IoLogoFacebook/>
                            </IconContext.Provider>
                        </a>
                        <a target='_blank' href='https://www.instagram.com' rel="noreferrer noopener">
                            <IconContext.Provider value={{ color: "#173D33", size: "24px", className: `${css.social_icon}` }}> 
                                <IoLogoInstagram/>
                            </IconContext.Provider>
                        </a>
                    </div>
                </address>
                <ContactForm className={css.contacts_formBox}/>
            </div>
        </section>
    )
}
; export default ContactUs;
