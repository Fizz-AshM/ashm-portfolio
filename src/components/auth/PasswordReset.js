import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../services/api/authAPI';

const PasswordReset = () => {
  const [formData, setFormData] = useState({ email: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(formData);
      history.push('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          name="email"
          required
          fullWidth
          id="email"
          label="Email"
          autoFocus
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

export default PasswordReset;
