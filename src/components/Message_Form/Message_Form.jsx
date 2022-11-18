import React, { useState } from 'react'
import './Message_Form.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Message_Form = function ({ create }) {

  const [message, setMessage] = useState({ author: '', text: '', });

  function addNewMessage(event) {
    event.preventDefault();
    const newMessage = {
      ...message, id: Date.now()
    }
    create(newMessage)
    setMessage({ author: '', text: '', })
  }

  return (
    <form className='form'>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className='form__input'
        type='text'
        placeholder='enter your message'
        autoFocus={true}
        value={message.text}
        onChange={event => setMessage({ ...message, author: 'author', text: event.target.value })}
      ></TextField>
      <Button
        variant="outlined"
        size="medium"
        className='form__button'
        type='submit'
        onClick={addNewMessage}>
        send message
      </Button>
    </form>
  )
}

export default Message_Form