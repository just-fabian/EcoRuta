import { Button } from '@material-ui/core';
import { AppBar, Box, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

const Header = () => {
  const [top, setTop] = useState(true);
  const navigate = useNavigate();
  const size = useWindowSize()

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
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Ecoruta
        </Typography>

        {
          size.width > 720 && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ButtonGroup variant="contained" color="primary">
                <Button>Mapa</Button>
                <Button>Servicios</Button>
                <Button>Carros Basureros</Button>
                <Button onClick={login}>LogIn</Button>
              </ButtonGroup>
            </Box>
          )
        }
      </Toolbar>
    </AppBar>
  );
}
export default Header;
