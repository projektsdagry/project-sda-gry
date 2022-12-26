import React, { useEffect, useState } from "react";
import Gamelist from "../../components/game-list";
import { Game } from "../../types/game";
import Pagination from "@mui/material/Pagination";

export const RankingView: React.FC = () => {
  const [games, setGames] = useState([] as Game[]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=5a117cd0e4cf4ef3b7f080f243bc1017&page_size=20&page=${page}&ordering=-metacritic&metacritic=88,100&platforms=4&dates=2014-12-01,2022-12-31`
    )
      .then((response) => response.json())
      .then((response) => setGames(response?.results || []))
      .catch((err) => setGames([]));
  }, [page]);

  return (
    <>
      <Gamelist games={games} />
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
