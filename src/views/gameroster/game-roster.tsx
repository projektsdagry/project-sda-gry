import { useEffect, useState } from "react"
import GamesByGenre from "../../components/games-by-genre/games-by-genre";
import { apiGames } from "../../services/api-rawg";

import { Genres, GenresResponse } from "../../types/gamegenres";

const GameRoster = () => {

    const [genres, setGenres] = useState<Genres[]>([]);

   useEffect(()=>{
    (async ()=>{
        const gamesData = await apiGames.getGenreList();
        if (gamesData){
            setGenres(gamesData)
        }
    })()

   },[]);

   


return (
    <div>
    <GamesByGenre genres={genres}/>
    </div>
)



}

export default GameRoster