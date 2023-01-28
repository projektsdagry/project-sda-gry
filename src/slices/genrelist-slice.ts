import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Genres } from "../types/gamegenres";
import { apiGames } from "../services/api-rawg";


interface GenreListState {
    genreList: Genres[];
}

const initialState:GenreListState = {
    genreList: []
}

export const getGenreListAsync = createAsyncThunk(
    "genrelist/fetchgenrelist",
    async() => {
        return await apiGames.getGenreList();
    }
)

export const genreListSlice = createSlice({
    name:"genrelist",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder) => {
        builder.addCase(getGenreListAsync.fulfilled, (state, action) => {
            state.genreList = action.payload || [];
        })
    }
})

export const selectGenreList = (state:RootState) =>
state.genreList.genreList;
export default genreListSlice.reducer;