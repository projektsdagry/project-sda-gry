import { useAppSelector } from "../../app/hooks";
import { selectGamesByGenreList } from "../../slices/gamelist-slice";
import { GenresList } from "../../types/gamegenres";
import "./games-by-genre-list-component.css";
import { useState } from "react";

const ListOfGames = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  let gameList = useAppSelector(selectGamesByGenreList);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
  };

  if (selectedPlatform !== "All") {
    gameList = gameList.filter((game) =>
      game.platforms.some(
        (platform) => platform.platform.name === selectedPlatform
      )
    );
  }

  return (
    <div>
      <div className="sorting-section">
        <label>Sort by platform:</label>
        <select title="select" value={selectedPlatform} onChange={handleChange}>
          <option value="All">All</option>
          <option value="PC">PC</option>
          <option value="macOS">macOS</option>
          <option value="Xbox Series S/X">Xbox Series S/X</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>
      </div>
      <div className="cont">
        <table className="gameTable">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Released at:</th>
              <th>Platforms:</th>
            </tr>
          </thead>
          {gameList.map((gamesList) => (
            <tbody key={gamesList.id}>
              <tr>
                <td>
                  <img alt="background_img" src={gamesList.background_image} />{" "}
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
