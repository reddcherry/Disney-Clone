import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import detailSlice from "./movieDetailSlice";


const store = configureStore({
  reducer: { auth: authSlice.reducer, detail:detailSlice.reducer},
});

export default store;