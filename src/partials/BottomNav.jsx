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
          <AppBar className='bottom-nav' position="flex">
            <BottomNavigation>
              <BottomNavigationAction label="Mapa" icon={<BiMap />} style={{color: "#3D656A"}} />
              <BottomNavigationAction label="Servicios" icon={<MdOutlineDashboard />} style={{color: "#3D656A"}} />
              <BottomNavigationAction label="Carros Basureros" icon={<FiTruck />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={login} label="LogIn" icon={<MdOutlineLogin />} style={{color: "#3D656A"}} />
            </BottomNavigation>
          </AppBar>
        )
      }
    </>
  )
}
export default BottomNav;
