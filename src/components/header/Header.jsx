import Logo from "./Logo/Logo";
import GreenBtn from "../btns/GreenBtn/GreenBtn";
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


  const [scrolltopdata, setscrolltopdata] = useState('');

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY < 15) {
              setscrolltopdata('');
          } else {
              setscrolltopdata('white');
          }
      });
  }, [])

    return (
        <div className={css.header_wrapper } style={{backgroundColor: scrolltopdata}}>
          <Logo/>
          <div className={css.header_btnBox}>
            <Modal/>
            {windowWidth > 768 && <GreenBtn nameBtn={headerBtn}/>}
          </div>
        </div>
      );
    };

    export default Header;