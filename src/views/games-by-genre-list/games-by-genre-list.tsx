import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ListOfGames from "../../components/games-by-genre-list-component/games-by-genre-list-component";
import { getGameListAsync, selectOrder } from "../../slices/gamelist-slice";

const GamesByGenreList = () => {
  const { gameId } = useParams();
 const  order = useAppSelector(selectOrder)
  const dispatch = useAppDispatch();
  const getGamesList = async (): Promise<void> => {
    if (gameId) {
      dispatch(getGameListAsync({gameId, order}));
    }
  };

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <div>
      <h1></h1>
      <ListOfGames />
    </div>
  );
};
export default GamesByGenreList;
