import { NavLink } from 'react-router-dom/dist';
import css from './GreenBtn.module.css';

const GetInTouchBtn = ({nameBtn}) => {

  return (
    <button className={css.contactBtn}>
        <NavLink to="/contact" className={css.contactLink}>
              {nameBtn}
        </NavLink>
    </button>
  );
};
export default GetInTouchBtn;
