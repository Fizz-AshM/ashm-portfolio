import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/api/authAPI';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      history.push('/profile');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Login
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
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
