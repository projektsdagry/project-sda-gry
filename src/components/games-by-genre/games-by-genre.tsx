import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectGenreList } from "../../slices/genrelist-slice";

import "./games-by-genre.css";

const GamesByGenre = () => {
  const navigate = useNavigate();
  let genreList = useAppSelector(selectGenreList);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {genreList.map((genres) => (
        <Grid item xs={2} sm={4} md={4}>
          <div className="container">
            <img
              alt="img"
              onClick={() => navigate(`/gamelist/${genres.id}`)}
              src={genres.image_background}
            />
            <div className="nameOfGenre">{genres.name}</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default GamesByGenre;
