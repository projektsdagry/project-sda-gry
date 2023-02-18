import React from 'react'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeOrder, getGameListAsync, selectGamesByGenreList, selectOrder } from "../../slices/gamelist-slice";
import "./games-by-genre-list-component.css";
import { useState,  } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent  } from "@mui/material";
import { useParams } from "react-router-dom";
const ListOfGames: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const dispatch = useAppDispatch()
  const order = useAppSelector(selectOrder)
  const {gameId} = useParams();
 
  let gameList = useAppSelector(selectGamesByGenreList);


// Sort by platform
  const handleChange = (event:SelectChangeEvent) => {
    setSelectedPlatform(event.target.value);
  };

  if (selectedPlatform !== "All") {
    gameList = gameList.filter((game) =>
      game.platforms.some(
        (platform) => platform.platform.name === selectedPlatform
      )
    );
  }
//Sort by else


  const handleSortChange = async (e:SelectChangeEvent): Promise<void> => {
    dispatch(changeOrder(e.target.value));
    if(gameId) {
    dispatch(getGameListAsync({ gameId, order: e.target.value }));
    }
  };




  return (
    <div style={{minHeight: '100vh'}}>
      <div className="sorting-section">
       
        <FormControl sx={{minWidth:'100px'}}>
          <InputLabel id="demo-simple-select-label">Platform</InputLabel>
          <Select
            
            value={selectedPlatform}
            label="Platform"
            onChange={handleChange}
          >
            <MenuItem  value='All'>All</MenuItem>
            <MenuItem value='PC'>PC</MenuItem>
            <MenuItem value='macOS'>macOS</MenuItem>
            <MenuItem value='Xbox Series S/X'>Xbox Series S/X</MenuItem>
            <MenuItem value='PlayStation 5'>PlayStation 5</MenuItem>
            <MenuItem value='Nintendo Switch'>Nintendo Switch</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{minWidth:'100px'}}>
          <InputLabel id="sort">Order</InputLabel>
          <Select
            
            value={order}
            label="Order"
            onChange={handleSortChange}
          >
            <MenuItem  value='popularity'>Popularity</MenuItem>
            <MenuItem value='-metacritic'>Rating</MenuItem>
            <MenuItem value='-released'>Released Date</MenuItem>
           

          </Select>
        </FormControl>

      </div>
      <div className="cont">
        <table className="gameTable">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Released at:</th>
              <th>Metacritic score</th>
              <th>Platforms:</th>
            </tr>
          </thead>
          <tbody>
            {gameList.map((gamesList) => (
            
              <tr className='table-row' key={gamesList.id}>
                <td>
                  <img alt="background_img" src={gamesList.background_image} />{" "}
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
                    .join(",")}
                </td>
              </tr>
            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListOfGames;
