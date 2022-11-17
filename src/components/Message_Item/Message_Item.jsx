import React from 'react';
import './Message_Item.scss'

const Message_Item = function (props) {

  return (
    <div className='message'>
      <p className='message__number'>{props.number}.</p>
      <p className='message__author'>{props.message.author}:</p>
      <p className='message__text'>{props.message.text}</p>
    </div>
  );
}

export default Message_Item;