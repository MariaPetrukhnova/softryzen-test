import { Link } from 'react-scroll';
import css from './GreenBtn.module.css';

const GreenBtn = ({nameBtn}) => {

  return (
    <button className={css.contactBtn}>
        <Link to="contact" spy={true} smooth={true} className={css.contactLink}>
              {nameBtn}
        </Link>
    </button>
  );
};
export default GreenBtn;
