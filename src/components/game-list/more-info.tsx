import { Game } from "../../types/game";
import React from "react";
import Grid from "@mui/material/Grid/Grid";
import { Card, CardContent, Container, Typography } from "@mui/material";

const MoreInfo = (props: { games: Game }) => {
  const game = props.games;
  return (
    <Container
      style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
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
              borderRadius: "12px",
            }}
            src={game.background_image}
          ></img>

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ display: "flex" }}
            >
              <h4 style={{ margin: "0px 10px 0px 0px " }}>Release date:</h4>
              {game.released}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ display: "flex" }}
            >
              <h4 style={{ margin: "0px 10px 0px 0px " }}>Rating:</h4>
              {game.rating}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ display: "flex" }}
            >
              <h4 style={{ margin: "0px 10px 0px 0px " }}>Genres:</h4>
              {game.genres.map((genre) => genre.name).join(", ")}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ display: "flex" }}
            >
              <h4 style={{ margin: "0px 10px 0px 0px " }}>Platforms:</h4>
              {game.platforms
                .map((platform) => platform.platform.name)
                .join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h2>About</h2>
              <p
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: game.description }}
              ></p>
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Container>
  );
};

export default MoreInfo;
