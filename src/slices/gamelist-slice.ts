import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { GenresList } from "../types/gamegenres";
import { apiGames } from "../services/api-rawg";


interface GameListState {
  genresList: GenresList[];
}

const initialState: GameListState = {
  genresList: [],
};

export const getGameListAsync = createAsyncThunk(
  "gamelist/fetchgamelist",
  async (gameId: string) => {
    return await apiGames.getGamesListByGenre(gameId || "");
  }
);

export const gamesByGenreListSlice = createSlice({
  name: "gamesbygenrelist",
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

export const selectGamesByGenreList = (state: RootState) =>
  state.gamesByGenreList.genresList;
export default gamesByGenreListSlice.reducer;
