import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import GamesByGenre from "../../components/games-by-genre/games-by-genre";
import { getGenreListAsync } from "../../slices/genrelist-slice";

const GameRoster = () => {
  const dispatch = useAppDispatch();
  const getGenresList = async (): Promise<void> => {
    dispatch(getGenreListAsync());
  };

  useEffect(() => {
    getGenresList();
  }, []);

  return (
    <div>
      <GamesByGenre />
    </div>
  );
};

export default GameRoster;
