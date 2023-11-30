import Logo from "./Logo";
import GetInTouchBtn from "./GetInTouchBtn/GreenBtn";
import { useState, useEffect } from "react";
import Modal from "./Modal/Modal";
import css from './Header.module.css';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headerBtn = 'Get in touch'

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className={css.header_wrapper}>
          <Logo/>
          <div className={css.header_btnBox}>
            <Modal/>
            {windowWidth > 768 && <GetInTouchBtn nameBtn={headerBtn}/>}
          </div>
        </div>
      );
    };

    export default Header;