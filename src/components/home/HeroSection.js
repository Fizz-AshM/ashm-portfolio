import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import TypeIt from 'typeit';

const HeroSection = () => {
  const typeitRef = useRef(null);

  useEffect(() => {
    new TypeIt(typeitRef.current, {
      strings: ["Welcome to ASH M PORTFOLIO", "I am a tech and finance buff"],
      speed: 50,
      loop: true,
    }).go();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          <span ref={typeitRef}></span>
        </Typography>
        <Typography variant="h5" paragraph>
          Showcasing my skills and projects in technology and finance.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#portfolio">
          View Portfolio
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
