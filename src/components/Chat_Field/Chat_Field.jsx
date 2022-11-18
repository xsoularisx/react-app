import React from 'react'
import './Chat_FIeld.scss'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';


const Chat_Field = function () {
  return (
    <Box className='chat' sx={{ width: '50%', maxWidth: 300, margin: 0, padding: 0, }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Chat №1" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
};

export default Chat_Field;