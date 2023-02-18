import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import { Footer } from "./components/footer/footer";

function FooterInLocation() {
  const location = useLocation();

  if (location.pathname.includes("/ranking/")) {
    return null;
  }

  return <Footer />;
}

function App() {
  return (
    <ColorMode>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="gamelist" element={<GameRoster />} />
          <Route path="gamelist/:gameId" element={<GamesByGenreList />} />
          <Route path="ranking" element={<RankingView />} />
          <Route path="ranking/:moreinfoId" element={<GameInfo />} />
          <Route path="imbored" element={<RandomizerView />} />
          {/* <Route path="game-creator" element={<GameCreator />} /> */}
        </Routes>
        <FooterInLocation />
      </Router>
    </ColorMode>
  );
}

export default App;
