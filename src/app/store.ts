import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesByGenrelistReducer from "../slices/gamelist-slice";

export const store = configureStore({
  reducer: {
    gamesByGenreList: gamesByGenrelistReducer,
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
