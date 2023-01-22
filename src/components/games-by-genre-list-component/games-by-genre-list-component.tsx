import { GenresList } from "../../types/gamegenres"
import "./games-by-genre-list-component.css"

const ListOfGames = (props: {gamesList: GenresList[]}) =>{
    const gameList = props.gamesList

return <div className="cont">
    
   
        
            <table className="gameTable">
                
                    <thead>
                        
                        <th>Name:</th>
                        <th>Released at:</th>
                        <th>Platforms:</th>
                    </thead>
                    
                    {gameList.map((gamesList) => (
                        <tbody key={gamesList.id}>
                        
                    <td><img src={gamesList.background_image}></img> <p>{gamesList.name}</p> </td>
                    <td> <p>{gamesList.released}</p></td>
                    <td>{gamesList.platforms.map((platforms) => platforms.platform.name ).join(",")}</td>
                    
                    </tbody>    
                    ))}
                
            </table>
       
        </div>
    

}
export default ListOfGames