import { GenresList } from "../../types/gamegenres"

const ListOfGames = (props: {gamesList: GenresList[]}) =>{

return <div>
    {props.gamesList.map((gamesList) => (
        gamesList.name
    ))}
</div>
}
export default ListOfGames