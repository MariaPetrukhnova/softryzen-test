import React, { useState } from 'react';
import css from './Modal.module.css';
import Navigation from '../Navigation/Navigation';
import { IoIosMenu, IoIosClose, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { IconContext } from "react-icons";


import '../../../index.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('overflowhidden');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('overflowhidden');
  };

  return (
    <div className={css.modal_Wrapper}>
    <div className={css.menu_Btn} onClick={openModal}>
        <IconContext.Provider value={{ color: "#292D32", size: "16px" }}> 
          <IoIosMenu/>
        </IconContext.Provider>
    </div>

      {isOpen && (
        <div className={css.modal_Overlay}>
          <div>
            <span className={css.close_Modal} onClick={closeModal}>
              <IconContext.Provider value={{ color: "#FFFFFF", size: "20px", className: `${css.close_Icon}` }}> 
                <IoIosClose/>
              </IconContext.Provider>
              close
            </span>
            <Navigation width={500} closeModal={closeModal} />
          </div>
          <div>
            <IconContext.Provider value={{ color: "#FFF", size: "24px" }}> 
              <IoLogoFacebook/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#FFF", size: "24px", className: `${css.insta_Icon}` }}> 
              <IoLogoInstagram/>
            </IconContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;