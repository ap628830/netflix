import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies :null
    },
    reducers: {
        addMovieList(state,action) {
            state.nowPlayingMovies = action.payload
        },
        removieList(state) {
            return null
        }
    }
})

export default movieSlice.reducer;
export const {addMovieList,removieList} = movieSlice.actions