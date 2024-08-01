import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Donation data:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="amount"
            label="Donation Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Donate
      </Button>
    </Box>
  );
};

export default DonationForm;
