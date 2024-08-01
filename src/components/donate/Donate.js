import React from 'react';
import { Container, Typography } from '@mui/material';
import DonationForm from './DonationForm';

const Donate = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Support My Work
      </Typography>
      <Typography variant="body1" paragraph>
        If you find my work valuable and would like to support me, please consider making a donation. Your support is greatly appreciated!
      </Typography>
      <DonationForm />
    </Container>
  );
};

export default Donate;
