import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const features = [
  { title: 'Cutting-Edge Technology', description: 'Leveraging the latest technologies to build innovative solutions.' },
  { title: 'Financial Expertise', description: 'Applying deep knowledge in finance to create impactful projects.' },
  { title: 'AI Chatbots', description: 'Developing intelligent chatbots for enhanced user interactions.' },
  { title: 'Real-Time Applications', description: 'Building real-time applications using socket.io and other technologies.' },
  { title: '3D Visualizations', description: 'Creating immersive 3D visualizations with React Three Fiber.' },
  { title: 'User-Centric Design', description: 'Focusing on user experience and design to create engaging interfaces.' }
];

const FeaturesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Key Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
