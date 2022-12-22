import { AppBar } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomeView from './views/home/home';

function App() {
  return (
    <BrowserRouter>
    <div>appbar</div>
    <Routes>
      <Route path="/" element={<HomeView/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
