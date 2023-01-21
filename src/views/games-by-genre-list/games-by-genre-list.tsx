import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ListOfGames from "../../components/games-by-genre-list-component/games-by-genre-list-component";
import { apiGames } from "../../services/api-rawg";
import { GenresList } from "../../types/gamegenres";

const GamesByGenreList = () => {
    const [gamesList, setgamesList] = useState<GenresList[]>([]);
    const {gameId} = useParams();

    useEffect(() =>{
        (async () =>{
            const gamesData = await apiGames.getGamesListByGenre(gameId || '');
            if (gamesData){
                setgamesList(gamesData)
            }
        })()
        

    },[gameId])

        if(!gamesList){
            return <></>;
        }


    return (
        <div>
            <ListOfGames gamesList = {gamesList} />
        </div>
    )
}
export default GamesByGenreList