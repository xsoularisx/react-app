/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Chats from './pages/Chats';
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path="/" element={<Navigate replace to='/chats' />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
