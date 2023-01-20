import { Game } from "../../types/game";
import React from "react";
import Grid from "@mui/material/Grid/Grid";
import { Card, CardContent, Container, Typography } from "@mui/material";

const MoreInfo = (props: { games: Game }) => {
  const game = props.games;

  return (
    <Container maxWidth="xl" style={{ margin: "50px 0 0 300px" }}>
      <Card
        sx={{ maxWidth: 1200 }}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          display: "block",
        }}
      >
        <Grid key={game.id}>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {game.name}
          </h1>
          <img
            alt=""
            title="elo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            src={game.background_image}
          ></img>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <h2>About</h2>
              <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Release date</h4>
              {game.released}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Rating</h4>
              {game.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Genres</h4>
              {game.genres.map((genre) => genre.name).join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Platforms</h4>
              {game.platforms
                .map((platform) => platform.platform.name)
                .join(", ")}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Container>
  );
};

export default MoreInfo;
