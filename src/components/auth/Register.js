import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { register } from '../../services/api/authAPI';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      history.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Register
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
        <TextField
          name="password"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
