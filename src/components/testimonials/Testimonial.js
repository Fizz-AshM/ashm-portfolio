import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Testimonial = ({ name, feedback }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {feedback}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
