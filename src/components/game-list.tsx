import React from "react";
import { Game } from "../types/game";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Gamelist = (props: { games: Game[] }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom sx={{ padding: "40px 0" }}>
        Top 100 games
      </Typography>
      <Grid container spacing={2} columns={{ xs: 1, md: 4 }}>
        {props.games.map((game) => (
          <Grid
            item
            xs={1}
            md={1}
            key={game.id}
            sx={{
              
            }}
          >
            <img
              src={game.background_image}
              alt="games"
              style={{ width: "100%" }}
            ></img>
            <Typography variant="h6" gutterBottom sx={{ padding: "5px 0" }}>
              {game.name}
            </Typography>
            <p>Release date: {game.released}</p>
            <p>Metacritic score: {game.metacritic}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gamelist;
