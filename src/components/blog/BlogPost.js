import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Blog Post 1', content: 'Content for blog post 1...' },
  { id: 2, title: 'Blog Post 2', content: 'Content for blog post 2...' },
  { id: 3, title: 'Blog Post 3', content: 'Content for blog post 3...' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <Typography variant="h6" align="center">Post not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>
    </Container>
  );
};

export default BlogPost;
