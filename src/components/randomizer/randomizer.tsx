import React, { useEffect, useState } from "react";
import { Game } from "../../types/game";
import Grid from "@mui/material/Grid";
import "./randomizer.css";
import { Button } from "@mui/material";
import { thanksMessages, searchAgainMessages } from "./randomizer-messages";
import ReplayIcon from "@mui/icons-material/Replay";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getGamesAsync, selectGames } from "../../slices/randomizer-slice";

export const Randomizer: React.FC = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectGames);
  const [selected, setSelected] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canClick, setCanClick] = useState(true);
  const [isThanksButtonClicked, setIsThanksButtonClicked] = useState(false);
  const [thanksMessage, setThanksMessage] = useState(thanksMessages[0]);
  const [searchAgainMessage, setSearchAgainMessage] = useState(
    searchAgainMessages[0]
  );
  const [isSearchAgainButtonClicked, setIsSearchAgainButtonClicked] =
    useState(false);

  useEffect(() => {
    (async () => {
      const page = Math.floor(Math.random() * 50 + 1);
      dispatch(getGamesAsync({ page, pageSize: 40 }));
    })();
  }, []);

  const getGenresFromSelected = (selected: Game[]) => {
    const genres = selected.map((game) => game.genres.map((genre) => genre.id));
    const concatGenres = new Set([
      ...genres[0],
      ...genres[1],
      ...genres[2],
      ...genres[3],
      ...genres[4],
    ]);
    const finalGenres = Array.from(concatGenres);
    return finalGenres.toLocaleString();
  };

  useEffect(() => {
    (async () => {
      if (selected.length === 5) {
        setCanClick(false);
        setIsLoading(true);
        const page = Math.floor(Math.random() * 25 + 1);
        dispatch(
          getGamesAsync({
            page,
            pageSize: 5,
            genres: getGenresFromSelected(selected),
          })
        );
        setIsLoading(false);
      }
    })();
  }, [selected.length]);

  useEffect(() => {
    if (isThanksButtonClicked) {
      let randomMessage = Math.floor(Math.random() * thanksMessages.length);
      setThanksMessage(thanksMessages[randomMessage]);
      const text = document.querySelector(".slide-in-text");
      if (text) {
        setTimeout(() => {
          setIsThanksButtonClicked(false);
        }, 2000);
      }
    }
  }, [isThanksButtonClicked]);

  const handleClick = async (game: Game) => {
    if (!canClick) return;
    if (selected.find((selectedGame) => selectedGame.id === game.id)) {
      setSelected((previous) =>
        previous.filter((selectedGame) => selectedGame.id !== game.id)
      );
    } else {
      setSelected((previous) => [...previous, game]);
    }
  };

  if (isLoading) {
    //todo spinnerek is going to be here
    return null;
  }

  const handleSearchAgain = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsSearchAgainButtonClicked(true);
    let randomMessage = Math.floor(Math.random() * searchAgainMessages.length);
    setSearchAgainMessage(searchAgainMessages[randomMessage]);
    setTimeout(async () => {
      setIsSearchAgainButtonClicked(false);
      setIsLoading(true);
      const page = Math.floor(Math.random() * 25 + 1);
      dispatch(
        getGamesAsync({
          page,
          pageSize: 5,
          genres: getGenresFromSelected(selected),
        })
      );
      setIsLoading(false);
    }, 2000);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {" "}
      {canClick && (
        <p className="boredP">Pick 5 games you like to get recommendations</p>
      )}
      {!canClick && (
        <div className="boredDiv">
          <ReplayIcon
            style={{
              cursor: "pointer",
              margin: "64px 0 0 10px ",
              fontSize: "50px",
            }}
            onClick={handleRefresh}
          ></ReplayIcon>

          <p>Here are 5 games you should try!</p>
        </div>
      )}
      <Grid container columns={10} padding={5} paddingTop={0} spacing={2}>
        {games.length > 0 ? (
          games.map((game) => (
            <Grid item xs={10} md={5} lg={2} key={game.id}>
              <div
                style={{
                  border: "3px solid transparent",
                  position: "relative",
                  overflow: "hidden",
                }}
                className={
                  selected.find((selectedGame) => selectedGame.id === game.id)
                    ? "selected"
                    : ""
                }
                onClick={() => handleClick(game)}
              >
                <img
                  src={game.background_image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "10px",
                  }}
                ></img>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "white",
                    textShadow: "black 0px 0 22px",
                  }}
                >
                  <h3>{game.name}</h3>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <div>Loading...</div>
        )}{" "}
        {!canClick && (
          <div
            style={{
              display: "flex",
              width: "98%",
              marginLeft: "30px",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  setIsThanksButtonClicked(true);
                }}
                style={{
                  backgroundColor: "#68bd89",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  borderRadius: "10px",
                }}
                variant="contained"
              >
                COOL THANKS
              </Button>
              <div
                className={`slide-in-text ${
                  isThanksButtonClicked ? "show" : ""
                }`}
                style={{
                  display: "inline",
                  marginLeft: "15px",
                  userSelect: "none",
                }}
              >
                {thanksMessage}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Button
                onClick={handleSearchAgain}
                style={{
                  backgroundColor: "#c78cff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  borderRadius: "10px",
                }}
                variant="contained"
              >
                SHOW MORE
              </Button>
              <div
                className={`slide-in-text ${
                  isSearchAgainButtonClicked ? "show" : ""
                }`}
                style={{
                  display: "inline-block",
                  position: "absolute",
                  right: "165px",
                  marginRight: "15px",
                  whiteSpace: "nowrap",
                }}
              >
                {searchAgainMessage}
              </div>
            </div>
          </div>
        )}
      </Grid>
    </div>
  );
};
