import { NavLink } from 'react-router-dom/dist';
import css from './GetInTouchBtn.module.css';

const GetInTouchBtn = () => {

  return (
    <button className={css.contactBtn}>
        <NavLink to="/contact" className={css.contactLink}>
              Get in touch
        </NavLink>
    </button>
  );
};
export default GetInTouchBtn;
