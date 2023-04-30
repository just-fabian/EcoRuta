import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography } from '@material-ui/core';
import { BiMap } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaDumpster } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

const BottomNav = () => {
  const navigate = useNavigate();
  const size = useWindowSize();

  const dumspsters = () => {
    navigate('/dumpsters');
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
              <BottomNavigationAction onClick={home} label="Mapa carros basureros" icon={<BsMap />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={dumspsters} label="Contenedores" icon={<FaDumpster />} style={{color: "#3D656A"}} />
              <BottomNavigationAction onClick={trucks} label="Carros Basureros" icon={<FiTruck />} style={{color: "#3D656A"}} />
            </BottomNavigation>
          </AppBar>
        )
      }
    </>
  )
}
export default BottomNav;
