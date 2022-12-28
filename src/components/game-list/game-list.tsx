import React from "react";
import { Game } from "../../types/game";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";
import "./game-list.css"

const Gamelist = (props: { games: Game[]; page: number }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom sx={{ padding: "40px 0" }}>
        Top 100 games
      </Typography>
      <Grid container spacing={12} columns={{ xs: 1, md: 4 }}>
        {props.games.map((game, index) => (
          <Grid item xs={1} md={1} key={game.id} sx={{}}>
            <div className="game">
              <div className="rank">{index + 1 + 20 * (props.page - 1)}</div>
              <div className="front">
                <img src={game.background_image} alt="games"></img>
                <h3 className="name">{game.name}</h3>
              </div>
              <div className="back">
                <div className="game-info">
                  <p className="game-stat">
                    {game.released}
                    <span>Release date</span>
                  </p>
                  <p className="game-stat">
                    {game.metacritic}
                    <span>Metacritic</span>
                  </p>
                </div>
                <button className="btn">More info</button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gamelist;
