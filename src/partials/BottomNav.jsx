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

  const profile = () => {
    navigate('/profile');
  };

  const services = () => {
    navigate('/services');
  };

  const home = () => {
    navigate('/');
  };

  const trucks = () => {
    navigate('/trucks');
  };


  return (
    <>
      {
        size.width <= 720 && (
          <AppBar className='bottom-nav' position="flex">
            <BottomNavigation>
              <BottomNavigationAction onClick={home} label="Mapa" icon={<BiMap />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={services} label="Servicios" icon={<MdOutlineDashboard />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={trucks} label="Carros Basureros" icon={<FiTruck />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={profile} label="Profile" icon={<MdOutlineLogin />} style={{color: "#3D656A"}} />
            </BottomNavigation>
          </AppBar>
        )
      }
    </>
  )
}
export default BottomNav;
