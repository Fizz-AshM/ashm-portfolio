import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  { title: 'Project 1', description: 'Description 1', image: '/path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description 2', image: '/path/to/image2.jpg' },
  { title: 'Project 3', description: 'Description 3', image: '/path/to/image3.jpg' },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
