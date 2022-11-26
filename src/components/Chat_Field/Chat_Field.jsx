import React from 'react'
import './Chat_FIeld.scss'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Chat_Field = function () {
  return (
    <Box className='chat' sx={{ width: '25%', maxWidth: 300, margin: 0, padding: '10px', }}>
      <List sx={{ margin: 0, padding: 0, }} className='chat__item'>
        <ListItem sx={{ margin: 0, padding: 0, }} className='chat__item'>
          <ListItemButton sx={{ margin: 0, padding: 0, }} className='chat__item'>
            <ListItemText sx={{ margin: 0, padding: 0, marginBottom: '10px' }} className='chat__item' primary="chat #1" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
};

export default Chat_Field;