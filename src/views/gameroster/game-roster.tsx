import { useEffect, useState } from "react"
import GamesByGenre from "../../components/games-by-genre/games-by-genre";
import { apiGames } from "../../services/api-rawg";

import { Genres } from "../../types/gamegenres";

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

   genres.map((genres)=>(
    console.log(genres.)
   ))

return (
    <div>
        
    {/* {genres && genres.length > 0 ?  <GamesByGenre genres={genres}/>: <p>Loading....</p>} */}
    </div>
)



}

export default GameRoster