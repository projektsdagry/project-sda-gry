import { GenresList } from "../../types/gamegenres"
import "./games-by-genre-list-component.css"

const ListOfGames = (props: {gamesList: GenresList[]}) =>{
    const gameList = props.gamesList

return <div className="cont">
    
   
        
            <table className="gameTable">
                
                    <thead>
                        <tr>
                        
                        <th>Name:</th>
                        <th>Released at:</th>
                        <th>Platforms:</th>
                        </tr>
                    </thead>
                    
                    {gameList.map((gamesList) => (
                        <tbody key={gamesList.id}>
                            <tr>
                        
                    <td><img src={gamesList.background_image}></img> <p>{gamesList.name}</p>{""} </td>
                    <td>{""} <p>{gamesList.released}</p></td>
                    <td>{gamesList.platforms.map((platforms) => platforms.platform.name ).join(",")}</td>
                    </tr>
                    </tbody>    
                    ))}
                
            </table>
       
        </div>
    

}
export default ListOfGames