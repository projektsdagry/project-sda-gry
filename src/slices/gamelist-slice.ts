import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { Genres, GenresList } from "../types/gamegenres";
import { apiGames } from "../services/api-rawg";
import { useParams } from "react-router-dom";

interface GameListState {
  gamelistByGenres: GenresList[];
}

const initialState: GameListState = {
  gamelistByGenres: [],
};

export const getGameListAsync = createAsyncThunk(
  "gameslist/fetchGamesList",
  async (gameId: string) => {
    return await apiGames.getGamesListByGenre(gameId || "");
  }
);

export const gamesByGenrelistSlice = createSlice({
  name: "gameslist",
  initialState,
  reducers: {
    filterByPlatform: () => {},
  },

  extraReducers: (builder) => {
    builder.addCase(getGameListAsync.fulfilled, (state, action) => {
      state.gamelistByGenres = action.payload || [];
    });
  },
});

export const selectGamesByGenreList = (state: RootState) =>
  state.gamesByGenreList.gamelistByGenres;
export default gamesByGenrelistSlice.reducer;
