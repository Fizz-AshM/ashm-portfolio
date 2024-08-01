import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const LinkedIn = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Connect with me on LinkedIn
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/path/to/linkedin-logo.png"
            alt="LinkedIn Profile"
            style={{ width: '150px' }}
          />
        </a>
      </Box>
    </Container>
  );
};

export default LinkedIn;
