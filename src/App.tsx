import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeView } from "./views/home/home";
import AppBar from "./components/app-bar";
import { ColorMode } from "./components/color-mode";
import { RankingView } from "./views/ranking/ranking";
import { RandomizerView } from "./views/randomizer/randomizer";
import { GameInfo } from "./views/gameinfo/game-info";

function App() {
  return (
    <ColorMode>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/ranking" element={<RankingView />} />
          <Route path="imbored" element={<RandomizerView />} />
          <Route path="gameinfo" element={<GameInfo />} />
        </Routes>
      </BrowserRouter>
    </ColorMode>
  );
}

export default App;
