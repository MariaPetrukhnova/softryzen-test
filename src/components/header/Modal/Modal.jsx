import React, { useState } from 'react';
import css from './Modal.module.css';
import Navigation from '../Navigation/Navigation';
import { IoIosMenu, IoIosClose} from "react-icons/io";
import { IconContext } from "react-icons";
import sprite from '../../../assets/sprite3.svg';
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
    <button className={css.menu_Btn} onClick={openModal}>
        <IconContext.Provider value={{ color: "#292D32", size: "16px" }}> 
          <IoIosMenu/>
        </IconContext.Provider>
    </button>

      {isOpen && (
        <div className={css.modal_backDrop}>
          <div className={css.modal_Overlay}>
            <div>
              <div className={css.close_Box}>
                <span className={css.close_Modal} onClick={closeModal}>
                  <IconContext.Provider value={{ color: "#FFFFFF", size: "20px", className: `${css.close_Icon}` }}> 
                    <IoIosClose/>
                  </IconContext.Provider>
                close
              </span>
              </div>
              <Navigation width={500} closeModal={closeModal} />
            </div>
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
        </div>
      )}
    </div>
  );
};

export default Modal;