import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/app-bar/app-bar";
import { ColorMode } from "./components/app-bar/color-mode";
import { RankingView } from "./views/ranking/ranking";
import { RandomizerView } from "./views/randomizer/randomizer";
import { GameInfo } from "./views/gameinfo/game-info";
import GameRoster from "./views/gameroster/game-roster";
import { HomeView } from "./views/home/home";
import GamesByGenreList from "./views/games-by-genre-list/games-by-genre-list";
import { GameCreator } from "./views/createagame/create-a-game";

function App() {
  return (
    <ColorMode>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="gamelist" element={<GameRoster />} />
          <Route path="gamelist/:genreId" element={<GamesByGenreList />} />
          <Route path="ranking" element={<RankingView />} />
          <Route path="ranking/:moreinfoId" element={<GameInfo />} />
          <Route path="imbored" element={<RandomizerView />} />
          <Route path="game-creator" element={<GameCreator />} />
        </Routes>
      </BrowserRouter>
    </ColorMode>
  );
}

export default App;
