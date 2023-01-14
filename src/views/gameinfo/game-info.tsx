import { useEffect, useState } from "react";
import MoreInfo from "../../components/game-list/more-info";
import { Game } from "../../types/game";

export const GameInfo: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/3497?key=5a117cd0e4cf4ef3b7f080f243bc1017`
    )
      .then((response) => response.json())
      .then((response) => {
        setGames([response]);
      })
      .catch((err) => setGames([]));
  }, []);


  return (
    <>
      <MoreInfo games={games} />
    </>
  );
};
