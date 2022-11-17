/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import './Layout.scss'
import Message_Form from '../Message_Form/Message_Form';
import Message_Field from '../Message_Field/Message_Field';

const Layout = function () {

  const [messages, setMessages] = useState(
    [
      { id: 1, author: 'bot', text: 'hello' },
      { id: 2, author: 'bot', text: 'i am bot' },
      { id: 3, author: 'bot', text: 'how are you?' },
    ]
  );

  const createMessage = function (newMessage) {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage.author === 'author') {
      setTimeout(() => {
        createMessage({ author: 'bot', text: 'i am bot', id: Date.now() })
      }, 1000)

    }
  }, [messages]);

  return (
    <div className='layout'>Layout
      <Message_Field messages={messages} />
      <Message_Form create={createMessage} />
    </div>
  )
};

export default Layout;