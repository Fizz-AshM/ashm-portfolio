import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ASH M PORTFOLIO
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
        <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
        <Button color="inherit" component={RouterLink} to="/testimonials">Testimonials</Button>
        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
