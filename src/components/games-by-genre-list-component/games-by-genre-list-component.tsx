import { GenresList } from "../../types/gamegenres"

const ListOfGames = (props: {gamesList: GenresList[]}) =>{
    const gameList = props.gamesList

return <div>
    {gameList.map((gamesList) => (
        <div key={gamesList.id}>
       {gamesList.name} 
        </div>
    ))}
</div>
}
export default ListOfGames