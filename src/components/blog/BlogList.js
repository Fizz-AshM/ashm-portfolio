import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Blog Post 1' },
  { id: 2, title: 'Blog Post 2' },
  { id: 3, title: 'Blog Post 3' },
];

const BlogList = () => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem button component={Link} to={`/blog/${post.id}`} key={post.id}>
          <ListItemText primary={post.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default BlogList;
