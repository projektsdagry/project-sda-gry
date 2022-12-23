import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import { MainView } from './views/home/home';
import AppBar from './components/app-bar';

function App() {
  return (
    <BrowserRouter>
    <AppBar />
    <Routes>
      <Route path="/" element={<MainView/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
