import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesByGenreListReducer from "../slices/gamelist-slice";
import genreListReducer from "../slices/genrelist-slice"

export const store = configureStore({
  reducer: {
    gamesByGenreList: gamesByGenreListReducer,
    genreList: genreListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
