import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainView } from "./views/home/home";
import AppBar from "./components/app-bar";
import { ColorMode } from "./components/color-mode";
import { RankingView } from "./views/ranking/ranking";
import { NewsView } from "./views/news/news";
import { RandomizerView } from "./views/randomizer/randomizer";

function App() {
  return (
    <ColorMode>
    <BrowserRouter>
    <AppBar />
    <Routes>
      <Route path="/" element={<MainView/>}/>
      <Route path="/ranking" element={<RankingView/>}/>
      <Route path="/news" element={<NewsView/>} />
      <Route path="imbored" element={<RandomizerView/>}/>
      
    </Routes>
    </BrowserRouter>
    </ColorMode>
  );
}

export default App;
