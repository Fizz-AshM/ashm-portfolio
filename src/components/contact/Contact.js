import React from 'react';
import { Container, Typography } from '@mui/material';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or would like to discuss a project, please feel free to reach out.
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default Contact;
