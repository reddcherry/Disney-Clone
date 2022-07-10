import { createSlice } from "@reduxjs/toolkit";

const initialState = { movieDetails: [], count:0 };

const watchListSlice = createSlice({
  name: "watchListSlice",
  initialState,
  reducers: {
    addToWatchList(state, action) {
     for(const movieDetail of state.movieDetails){
      if(movieDetail.id==action.payload.movieDetail.id) return;
     } 
       state.movieDetails.push(action.payload.movieDetail);
      localStorage.setItem("movieDetails", JSON.stringify(state.movieDetails));
      state.count = state.movieDetails.length;
    },
    removeFromWatchList(state, action) {
     state.movieDetails= state.movieDetails.filter((movieDetail) => movieDetail.id != action.payload.id);
      localStorage.setItem("movieDetails", JSON.stringify(state.movieDetails));
      state.count = state.movieDetails.length;
    },
    getmovieDetailsOnReload(state, action){
     state.movieDetails = action.payload.ids;
     state.count = state.movieDetails.length;
    }
  },
});

export const watchListActions = watchListSlice.actions;

export default watchListSlice;