import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        AI Chatbot
      </Typography>
      <Typography variant="body1" paragraph>
        Interact with our AI-powered chatbot for assistance and inquiries.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <ChatWindow />
      </Box>
    </Container>
  );
};

export default Chatbot;
