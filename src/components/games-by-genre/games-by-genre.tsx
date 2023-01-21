import { Grid, ListItem } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Genres } from "../../types/gamegenres"
import "./games-by-genre.css"


const GamesByGenre = (props: {genres: Genres[]}) =>{
  const navigate = useNavigate();

return <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
    {props.genres.map((genres) => (
        <Grid item xs={2} sm={4} md={4}>
       <div className="container">
      <img onClick={() => navigate(`/gamelist/${genres.id}`)} src={genres.image_background}></img>
        <div className="nameOfGenre">{genres.name}</div>
         </div>
       </Grid>
    ))}
</Grid>


}

export default GamesByGenre