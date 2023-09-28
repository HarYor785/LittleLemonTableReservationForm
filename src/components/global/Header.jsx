import React from 'react';
import { useState } from 'react';
import {Box, Typography, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';


const styles = {
  my: 2,
  color: '#000',
  display: 'block',
  position:'relative',
  "&:before":{
      content: "''",
      position:'absolute',
      bottom:'5px',
      width:'0',
      height:'2px',
      background:'var(--background-color)',
      transition:'all 300ms ease',
  },
  "&:hover":{
      background:'none',
      color:'var(--background-color)'},
  "&:hover:before":{
      width:'80%'},
}



const NavigateTo = (links)=>{
  const scrollTo = `${links.toLowerCase()}`
  const navigate = useNavigate()
  const handleClick = ()=>{
    if(scrollTo === 'home'){
      navigate('/')
    }else if(scrollTo === 'reserve table'){
      navigate('/reserve-table')
    }else{
      if (document.getElementById(scrollTo)) {
        document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' });
      } else {
        // Handle case where section does not exist on the current page
        console.warn(`Section "${scrollTo}" does not exist on this page.`);
      }
    }
  }
  return(
    <Button
      onClick={handleClick}
      key={links}
      sx={styles}>
      {links}
    </Button>
  )
}

const pages = ['Home', 'About', 'Menu', 'Reserve table', 'Order'];

const Header = () => {

    
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const buttonStyle = {
        my: 2,
        display: 'block',
        color: 'var(--background-color)',
        border: '1px solid var(--background-color)',
        padding:'0 10px',
        "&:hover":{
            background:'var(--background-color)',
            color:'#fff',
        },

    }
    return (
      <AppBar position="static"
      sx={{background:'#fff',
      boxShadow:'none'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: "flex"}}>
              <img src={logo} alt='' width="180px" height="40px"/>
            </Box>

            <Box sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                }}>
              {pages.map((page) => NavigateTo(page))}
              <Box sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent:'flex-end',
                }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,
                    mr:2,
                    color: '#000',
                    display: 'block',
                    "&:hover":{
                        background:'var(--background-color)',
                        color:'#fff',
                        },
                    }}
                >
                    Login
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={buttonStyle}
                >
                    Signup
                </Button>
              </Box>

            </Box>

            {/* MOBILE */}
  
            <Box sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent:'flex-end'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Signup</Typography>
                </MenuItem>
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Header
