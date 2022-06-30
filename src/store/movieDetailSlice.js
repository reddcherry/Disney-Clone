import { createSlice } from "@reduxjs/toolkit";

const initialState = {movieDetail:{}};

const detailSlice = createSlice({
 name:"movieDetail",
 initialState,
 reducers:{
  setMovieDetail(state, action){
   state.movieDetail = action.payload.movieDetail;
  }
 }
})
export const detailSliceActions = detailSlice.actions;


export default detailSlice;