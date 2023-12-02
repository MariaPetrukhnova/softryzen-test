// import { Link } from 'react-router-dom';
import css from './Navigation.module.css';
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from "react-icons";
import { Link } from 'react-scroll';

const Navigation = ({ closeModal }) => {
    
  return (
    <nav>
      <ul className={css.nav}>
        <li className={css.nav_item}>
        <Link
          to="main" spy={true} smooth={true}
            className={css.nav_link}
            onClick={closeModal}
          >
            Main
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            to="about" spy={true} smooth={true} 
            className={css.nav_link}
            onClick={closeModal}
          >
            About
            <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            to="service" spy={true} smooth={true} 
            className={css.nav_link}
            onClick={closeModal}
          >
            Service
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            to="cases" spy={true} smooth={true} 
            className={css.nav_link}
            onClick={closeModal}
          >
            Cases
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            to="faq" spy={true} smooth={true} 
            className={css.nav_link}
            onClick={()=>closeModal()}
          >
            FAQ
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            to="contact" spy={true} smooth={true} 
            className={css.nav_link}
            onClick={()=>closeModal()}
          >
            Contact Us
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

