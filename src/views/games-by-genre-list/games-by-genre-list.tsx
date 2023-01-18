import { useEffect, useState } from "react"
import ListOfGames from "../../components/games-by-genre-list/games-by-genre-list";
import { apiGames } from "../../services/api-rawg";
import { GenresList } from "../../types/gamegenres";

const GamesByGenreList = () => {
    const [gamesList, setgamesList] = useState<GenresList[]>([]);

    useEffect(() =>{
        (async () =>{
            const gamesData = await apiGames.getGamesListByGenre('action');
            if (gamesData){
                setgamesList(gamesData)
            }
        })()
        

    },[])




    return (
        <div>
            <ListOfGames gamesList = {gamesList} />
        </div>
    )
}
export default GamesByGenreList