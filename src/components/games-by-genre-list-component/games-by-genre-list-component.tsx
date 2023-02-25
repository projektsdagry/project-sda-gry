import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeOrder,
  getGameListAsync,
  selectGamesByGenreList,
  selectOrder,
} from "../../slices/gamelist-slice";
import "./games-by-genre-list-component.css";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { styledModal } from "../../styled/games-by-genre-list/modal-styled";
import { apiGames } from "../../services/api-rawg";
import { Game } from "../../types/game";

const ListOfGames: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let gameList = useAppSelector(selectGamesByGenreList);
  const order = useAppSelector(selectOrder);
  const { genreId } = useParams();
  // Modal states
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  // gameinfo
  const [gameId, setGameId] = useState<string | undefined>("");
  const [gameInfo, setGameInfo] = useState<Game>();
  useEffect(() => {
    (async () => {
      if (gameId) {
        const gamesData = await apiGames.getGameInfo(gameId || "");
        setGameInfo(gamesData);
      }
    })();
  }, [gameId]);

  // Sort by platform
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedPlatform(event.target.value);
  };

  if (selectedPlatform !== "All") {
    gameList = gameList.filter((game) =>
      game.platforms.some(
        (platform) => platform.platform.name === selectedPlatform
      )
    );
  }

  //Sort by realesed date, metacritic and popularity
  const handleSortChange = async (e: SelectChangeEvent): Promise<void> => {
    dispatch(changeOrder(e.target.value));
    if (genreId) {
      dispatch(getGameListAsync({ genreId, order: e.target.value }));
    }
  };

  return (
    <div className="selectContainer" >
      <div className="sorting-section">
        <UndoIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/gamelist")}
        >
          {" "}
        </UndoIcon>

        <FormControl sx={{ minWidth: "100px" }}>
          <InputLabel id="demo-simple-select-label">Platform</InputLabel>
          <Select
            value={selectedPlatform}
            label="Platform"
            onChange={handleChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="PC">PC</MenuItem>
            <MenuItem value="macOS">macOS</MenuItem>
            <MenuItem value="Xbox Series S/X">Xbox Series S/X</MenuItem>
            <MenuItem value="PlayStation 5">PlayStation 5</MenuItem>
            <MenuItem value="Nintendo Switch">Nintendo Switch</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "100px" }}>
          <InputLabel id="sort">Order</InputLabel>
          <Select value={order} label="Order" onChange={handleSortChange}>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="-metacritic">Rating</MenuItem>
            <MenuItem value="-released">Released Date</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="cont">
        <table className="gameTable">
          <thead>
            <tr>
              <th></th>
              <th>Name:</th>
              <th>Released at:</th>
              <th>Metacritic score</th>
              <th>Platforms:</th>
            </tr>
          </thead>
          <tbody>
            {gameList.map((gamesList) => (
              <tr
                className="table-row"
                key={gamesList.id}
                onClick={() => {
                  setGameId(gamesList.id.toString());
                  setOpen(true);
                }}
              >
                <td>
                  <img alt="background_img" src={gamesList.background_image} />{" "}
                </td>
                <td>
                  <p>{gamesList.name}</p>
                </td>
                <td>
                  <p>{gamesList.released}</p>
                </td>
                <td>
                  <p>{gamesList.metacritic}</p>
                </td>
                <td>
                  {gamesList.platforms
                    .map((platforms) => platforms.platform.name)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {gameInfo && (
        <div>
          {" "}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styledModal}>
              <div>
                <img
                alt="game-img"
                  title="game-img"
                  style={{ objectFit: "contain" }}
                  src={gameInfo?.background_image}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                >
                  {gameInfo?.name}
                </p>
                <div
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontWeight: "revert",
                  }}
                >
                  <p>{gameInfo.released}</p>
                </div>
              </div>
              <div>
                <span style={{ fontWeight: "bolder" }}> Stores: </span>
                {gameInfo.stores.map((stores) => stores.store.name).join(" , ")}
              </div>

              <div style={{}}>
                <p
                  style={{ marginTop: "0px" }}
                  dangerouslySetInnerHTML={{ __html: gameInfo?.description }}
                ></p>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default ListOfGames;
