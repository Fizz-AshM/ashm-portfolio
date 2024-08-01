import React from 'react';
import BlogList from './BlogList';
import { Container, Typography } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Blog
      </Typography>
      <BlogList />
    </Container>
  );
};

export default Blog;
