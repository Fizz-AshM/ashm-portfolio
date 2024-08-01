import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { updateProfile } from '../../services/api/authAPI';

const EditProfile = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      history.push('/profile');
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          name="name"
          required
          fullWidth
          id="name"
          label="Name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          name="email"
          required
          fullWidth
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfile;
