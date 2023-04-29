import { Button } from '@material-ui/core';
import { AppBar, Box, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';
import '../styles/header.css';

const Header = () => {
  const [top, setTop] = useState(true);
  const navigate = useNavigate();
  const size = useWindowSize();

  const signup = () => {
    navigate('/register');
  };

  const login = () => {
    navigate('/login');
  };
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#3D656A'}}>
        <Typography variant="h6" sx={{ color: '#FFF7F1'}}>
          EcoRuta
        </Typography>

        {
          size.width > 720 && (
            <Box sx={{ display: 'flex', alignItems: 'center'}} >
              <div className='header-buttons' >
                <Button style={{color: "#FFF7F1"}}>Mapa</Button>
                <Button style={{color: "#FFF7F1"}}>Servicios</Button>
                <Button style={{color: "#FFF7F1"}}>Carros Basureros</Button>
                <Button style={{color: "#FFF7F1"}} onClick={login}>LogIn</Button>
              </div>
            </Box>
          )
        }
      </Toolbar>
    </AppBar>
  );
}
export default Header;
