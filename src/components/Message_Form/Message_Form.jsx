import React, { useState } from 'react'
import './Message_Form.scss'

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
      <input
        className='form__input'
        type='text'
        placeholder='enter your message'
        value={message.text}
        onChange={event => setMessage({ ...message, author: 'author', text: event.target.value })}
      ></input>
      <button
        className='form__button'
        type='submit'
        onClick={addNewMessage}>
        send message
      </button>
    </form>
  )
}

export default Message_Form