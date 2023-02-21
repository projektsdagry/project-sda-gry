import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ListOfGames from "../../components/games-by-genre-list-component/games-by-genre-list-component";
import { getGameListAsync, selectOrder } from "../../slices/gamelist-slice";

const GamesByGenreList = () => {
  const { genreId } = useParams();
 const  order = useAppSelector(selectOrder)
  const dispatch = useAppDispatch();
  const getGamesList = async (): Promise<void> => {
    if (genreId) {
      dispatch(getGameListAsync({genreId, order}));
    }
  };

  

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <div>
      <ListOfGames />
    </div>
  );
};
export default GamesByGenreList;
