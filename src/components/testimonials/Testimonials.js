import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Testimonial from './Testimonial';

const testimonials = [
  { name: 'John Doe', feedback: 'This is an amazing portfolio!' },
  { name: 'Jane Smith', feedback: 'I am impressed with the quality of work.' },
  { name: 'Sam Wilson', feedback: 'Highly professional and skilled.' },
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Testimonial name={testimonial.name} feedback={testimonial.feedback} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
