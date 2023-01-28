import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ListOfGames from "../../components/games-by-genre-list-component/games-by-genre-list-component";
import { apiGames } from "../../services/api-rawg";
import { GenresList } from "../../types/gamegenres";

const GamesByGenreList = () => {
    const [gamesList, setgamesList] = useState<GenresList[]>([]);
    const {genreId} = useParams();

    useEffect(() =>{
        (async () =>{
            const gamesData = await apiGames.getGamesListByGenre(genreId || '');
            if (gamesData){
                setgamesList(gamesData)
            }
        })()
        

    },[genreId])

        if(!gamesList){
            return <></>;
        }


    return (
        <div>
            <h1></h1>
            <ListOfGames gamesList = {gamesList} />
        </div>
    )
}
export default GamesByGenreList