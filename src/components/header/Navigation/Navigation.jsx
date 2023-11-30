import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from "react-icons";

const Navigation = ({ closeModal }) => {
    
  return (
    <nav>
      <ul className={css.nav}>
        <li className={css.nav_item}>
          <NavLink
            to="/main"
            className={css.nav_link}
            onClick={closeModal}
          >
            Main
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/about"
            className={css.nav_link}
            onClick={closeModal}
          >
            About
            <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/service"
            className={css.nav_link}
            onClick={closeModal}
          >
            Service
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/cases"
            className={css.nav_link}
            onClick={closeModal}
          >
            Cases
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/faq"
            className={css.nav_link}
            onClick={()=>closeModal()}
          >
            FAQ
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/customers"
            className={css.nav_link}
            onClick={closeModal}
          >
            Customers
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            to="/contact"
            className={css.nav_link}
            onClick={()=>closeModal()}
          >
            Contact Us
          <IconContext.Provider value={{ color: "#FFF", size: "16px",  className: `${css.arrow_Icon}` }}> 
              <GoArrowUpRight/>
          </IconContext.Provider>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

