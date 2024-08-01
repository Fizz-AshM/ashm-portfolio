import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import socket from '../realTime/SocketManager';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessages([...messages, { sender: 'User', text: message }]);
      setMessage('');
    }
  };

  socket.on('message', (text) => {
    setMessages([...messages, { sender: 'Bot', text }]);
  });

  return (
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
  );
};

export default ChatWindow;

