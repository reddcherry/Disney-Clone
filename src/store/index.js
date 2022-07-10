import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import watchListSlice from "./watchListSlice";



const store = configureStore({
  reducer: { auth: authSlice.reducer, watchlist: watchListSlice.reducer},

});

export default store;