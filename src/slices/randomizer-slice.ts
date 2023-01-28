import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { apiGames } from "../services/api-rawg";
import { Game } from "../types/game";

export interface RandomizerState {
  games: Game[];
  isRandomizedGamesLoading: boolean;
}

const initialState: RandomizerState = {
  games: [],
  isRandomizedGamesLoading: false,
};

export interface GetGamesParams {
  page: number;
  pageSize: number;
  genres?: string;
}

export const getGamesAsync = createAsyncThunk(
  "randomizer/getGames",
  async ({ page, pageSize, genres }: GetGamesParams) => {
    return await apiGames.storeMethods.getGames(page, pageSize, genres);
  }
);

export const randomizerSlice = createSlice({
  name: "randomizer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGamesAsync.pending, (state) => {
        // state.isRandomizedGamesLoading = true;
      })
      .addCase(getGamesAsync.fulfilled, (state, action) => {
        state.games = action.payload || [];
        // state.isRandomizedGamesLoading = false
      })
      .addCase(getGamesAsync.rejected, (state) => {
        // state.games = []
        // state.isRandomizedGamesLoading = false
      });
  },
});

export const selectGames = (state: RootState) => state.games.games;

export default randomizerSlice.reducer;
