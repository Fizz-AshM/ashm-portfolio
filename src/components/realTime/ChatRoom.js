import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import socket from './SocketManager';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Real-Time Chat Room
      </Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, height: '400px', overflowY: 'auto' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg.sender} secondary={msg.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, display: 'flex' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChatRoom;
