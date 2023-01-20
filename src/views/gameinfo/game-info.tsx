import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoreInfo from "../../components/game-list/more-info";
import { Game } from "../../types/game";
import { apiGames } from "../../services/api-rawg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


export const GameInfo: React.FC = () => {
  const [games, setGames] = useState<Game>();
  const { moreinfoId } = useParams();
  useEffect(() => {
    (async () => {
      const gamesData = await apiGames.getGameInfo(moreinfoId || "");
      if (gamesData) {
        setGames(gamesData);
      }
    })();
  }, [moreinfoId]);

  if (!games) {
    return <></>;
  }
  return (
    <>
      <MoreInfo games={games} />
    </>
  );
};
