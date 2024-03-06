import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link, useNavigate } from 'react-router-dom';


import logo from '/logo.png'

const pages = ['About', 'Education', 'Projects', 'Contact'];

function NavBar() {
  const navigate = useNavigate();


  const handleButtonClick = (page) => {
    navigate(`/${page.toLowerCase().replace(' ', '-')}`);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to='/'
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Avatar
              alt="Logo"
              src={logo}
              sx={{
                width: 40,
                height: 40,
                marginRight: 2,
                display: { md: 'flex' }
              }}
            />
            Joshua Luca
          </Typography>
        
          <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButtonClick(page)}
                sx={{ my: 1, mx: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
