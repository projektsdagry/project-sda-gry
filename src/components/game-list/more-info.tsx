import { Game } from "../../types/game";
import Grid from "@mui/material/Grid/Grid";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { Footer } from "../footer/footer";

const MoreInfo = (props: { games: Game }) => {
  const game = props.games;
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Container
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Card>
          <Grid key={game.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <UndoIcon
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "25px",
                  left: "16px",
                }}
                fontSize="large"
                onClick={() => navigate(`/ranking`)}
              ></UndoIcon>
              <h1>{game.name}</h1>
            </div>
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
                  .join("  , ")}
              </Typography>

              <h2>About</h2>
              <p
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: game.description }}
              ></p>
            </CardContent>
          </Grid>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default MoreInfo;
