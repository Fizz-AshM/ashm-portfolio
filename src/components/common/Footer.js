import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} px={2} mt="auto" bgcolor="primary.main" color="white">
      <Container maxWidth="sm">
        <Typography variant="body1">© 2024 ASH M PORTFOLIO. All rights reserved.</Typography>
        <Typography variant="body2" color="inherit">
          {'Built with '}
          <Link color="inherit" href="https://reactjs.org/">
            React
          </Link>
          {', '}
          <Link color="inherit" href="https://mui.com/">
            Material-UI
          </Link>
          {', and '}
          <Link color="inherit" href="https://github.com/">
            GitHub
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
