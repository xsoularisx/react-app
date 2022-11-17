/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.scss';
import Message_Item from './components/Message_Item/Message_Item';

function App() {
  return (
    <div className="App">
      <Message_Item name='Albert' />
    </div>
  );
}

export default App;
