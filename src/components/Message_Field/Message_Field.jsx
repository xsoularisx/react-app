/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './Message_Field.scss'
import Message_Item from '../Message_Item/Message_Item';

const Message_Field = function ({ messages }) {

    return (
        <div className='messages'>
            {messages.map((message, index) => <Message_Item message={message} number={index + 1} key={message.id} />)}
        </div>
    )
};

export default Message_Field;