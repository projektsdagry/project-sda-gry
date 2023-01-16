import React, { useEffect, useState } from "react";
import Gamelist from "../../components/game-list/game-list";
import { Game } from "../../types/game";
import Pagination from "@mui/material/Pagination";
import { apiGames } from "../../services/api-rawg";

export const RankingView: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      const gamesData = await apiGames.getRankingList(page);
      if (gamesData) {
        setGames(gamesData);
      }
    })();
  }, [page]);

  return (
    <>
      <Gamelist games={games} page={page} />
      <Pagination
        count={5}
        onChange={(e, page) => setPage(page)}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        size="large"
      />
    </>
  );
};
