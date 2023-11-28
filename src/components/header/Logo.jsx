import LogoImg from '../../assets/images/logo2x.png';
import { NavLink } from 'react-router-dom/dist';

const Logo = () => {

  return (
    <div>
      <NavLink to="/">
            <img src={`${LogoImg}`} alt='logo' style={{width: '269px'}}/>
      </NavLink>
    </div>
  );
};
export default Logo;
