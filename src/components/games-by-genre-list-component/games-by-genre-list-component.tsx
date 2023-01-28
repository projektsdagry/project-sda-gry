import React from "react";
import { GenresList } from "../../types/gamegenres";
import "./games-by-genre-list-component.css";
import { useState } from "react";
import UndoIcon from "@mui/icons-material/Undo";
import { Navigate, useNavigate } from "react-router-dom";
const ListOfGames = (props: { gamesList: GenresList[] }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const gameList = props.gamesList;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
  };

  const navigate = useNavigate();

  let filteredList = gameList;
  if (selectedPlatform !== "All") {
    filteredList = gameList.filter((game) =>
      game.platforms.some(
        (platform) => platform.platform.name === selectedPlatform
      )
    );
  }
  return (
    <div>
      <div className="sorting-section">
        <label>Filtr by platform:</label>
        <select value={selectedPlatform} onChange={handleChange}>
          <option value="All">All</option>
          <option value="PC">PC</option>
          <option value="macOS">macOS</option>
          <option value="Xbox Series S/X">Xbox Series S/X</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>
      </div>
      <UndoIcon
        style={{ cursor: "pointer", margin: "5px 0 0 10px " }}
        fontSize="large"
        onClick={() => navigate(`/gamelist`)}
      >
        More info
      </UndoIcon>
      <div className="cont">
        <table className="gameTable">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Released at:</th>
              <th>Platforms:</th>
            </tr>
          </thead>
          {filteredList.map((gamesList) => (
            <tbody key={gamesList.id}>
              <tr>
                <td>
                  <img src={gamesList.background_image}></img>{" "}
                  <p>{gamesList.name}</p>
                </td>
                <td>
                  <p>{gamesList.released}</p>
                </td>
                <td>
                  {gamesList.platforms
                    .map((platforms) => platforms.platform.name)
                    .join(",")}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export default ListOfGames;
