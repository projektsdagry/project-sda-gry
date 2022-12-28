import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Game } from "../../types/game";
import Grid from "@mui/material/Grid";
import "./randomizer.css";

export const RandomizerView: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selected, setSelected] = useState<Game[]>([]);

  useEffect(() => {
    const page = Math.floor(Math.random() * (100) + 1)
    fetch(
      `https://api.rawg.io/api/games?page=${page}&page_size=50&key=47df0f4ea0b14eb3b3beaeba99f4e03d`
    )
      .then((response) => response.json())
      .then((data) => setGames(data.results));
  }, []);

  const handleClick = (game: Game) => {
    if (selected.includes(game)) {
      setSelected((previous) =>
        previous.filter((selectedGame) => selectedGame.id !== game.id)
      );
    } else {
      setSelected((previous) => [...previous, game]);
      console.log(selected);
    }
  };

  return (
    <>
      {" "}
      <p className="boredP">Pick 5 games you like to get recommendations</p>
      <Grid container columns={5} padding={5} paddingTop={0} spacing={2}>
        {games.map((game) => (
          <Grid item xs={1} key={game.id}>
            <div
            style={{border:"3px solid transparent", position:"relative", overflow:"hidden"}}
              className={
                selected.find((selectedGame) => selectedGame.id == game.id)
                  ? "selected"
                  : ""
              }
              onClick={() => handleClick(game)}
            >
              <img
                src={game.background_image}
                style={{ width: "100%", height: "200px", objectFit: "cover", display: "block", borderRadius:"10px" }}
              ></img>
              <div style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%,-50%)", color: "white", textShadow: "black 0px 0 22px"}}>
                  <h3>{game.name}</h3>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
