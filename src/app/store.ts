import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import randomizerReducer from "../slices/randomizer-slice";

export const store = configureStore({
  reducer: {
    games: randomizerReducer,
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
