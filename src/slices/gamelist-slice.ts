import { ActionCreatorWithoutPayload, createAsyncThunk, createSlice, PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { GenresList } from "../types/gamegenres";
import { apiGames } from "../services/api-rawg";


interface GameListState {
  gamelistByGenres: GenresList[];
  order:string;
}

const initialState: GameListState = {
  gamelistByGenres: [],
  order: 'popularity',
};

export interface getGamesByGenreParams {
  genreId:string;
  order:string;
}

export const getGameListAsync = createAsyncThunk(

  "gamelist/fetchgamelist",


  async ({genreId,order}:getGamesByGenreParams) => {
    return await apiGames.getGamesListByGenre(genreId || "", order);
  }
);


export const gamesByGenreListSlice = createSlice({
  name: "gamesbygenrelist",
  initialState,
  reducers: {
    changeOrder: (state, action:PayloadAction<string>) => {
      state.order = action.payload;
      
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getGameListAsync.fulfilled, (state, action) => {
      state.gamelistByGenres = action.payload || [];
    });
  },
});

export const selectGamesByGenreList = (state: RootState) =>

  state.gamesByGenreList.gamelistByGenres;



  
export const selectOrder = (state:RootState) => state.gamesByGenreList.order;
export const { changeOrder } = gamesByGenreListSlice.actions;
export default gamesByGenreListSlice.reducer;