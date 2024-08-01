import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const UserProfile = () => {
  const history = useHistory();

  const handleEditProfile = () => {
    history.push('/profile/edit');
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Name: John Doe</Typography>
        <Typography variant="h6">Email: johndoe@example.com</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleEditProfile}
        >
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
