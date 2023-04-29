import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography } from '@material-ui/core';
import { BiMap } from "react-icons/bi";
import { MdOutlineDashboard, MdOutlineLogin } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

const BottomNav = () => {
  const navigate = useNavigate();
  const size = useWindowSize();

  const signup = () => {
    navigate('/register');
  };

  const login = () => {
    navigate('/login');
  };

  return (
    <>
      {
        size.width <= 720 && (
          <AppBar position="static">
            <BottomNavigation>
              <BottomNavigationAction label="Mapa" icon={<BiMap />} />
              <BottomNavigationAction label="Servicios" icon={<MdOutlineDashboard />} />
              <BottomNavigationAction label="Carros Basureros" icon={<FiTruck />} />
              <BottomNavigationAction onClick={login} label="LogIn" icon={<MdOutlineLogin />} />
            </BottomNavigation>
          </AppBar>
        )
      }
    </>
  )
}
export default BottomNav;
