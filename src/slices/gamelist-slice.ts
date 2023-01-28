import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { Genres, GenresList } from "../types/gamegenres";
import { apiGames } from "../services/api-rawg";
import { useParams } from "react-router-dom";

interface GameListState {
  genresList: GenresList[];
}

const initialState: GameListState = {
  genresList: [],
};

export const getGameListAsync = createAsyncThunk(
  "todos/fetchTodos",
  async (gameId: string) => {
    return await apiGames.getGamesListByGenre(gameId || "");
  }
);

export const genreListSlice = createSlice({
  name: "genrelist",
  initialState,
  reducers: {
    filterByPlatform: () => {},
  },

  extraReducers: (builder) => {
    builder.addCase(getGameListAsync.fulfilled, (state, action) => {
      state.genresList = action.payload || [];
    });
  },
});

export const selectGenreList = (state: RootState) =>
  state.gamesByGenreList.genresList;
export default genreListSlice.reducer;
