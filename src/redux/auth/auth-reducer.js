import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  //   user: { name: null, email: null },
  //   token: null,
  //   isLoggedIn: false,
  user: { name: null, email: null },
  isLoader: false,
  token: null,
  isLoggedIn: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoader = false;
      state.isLoggedIn = true;
    },
    [register.pending](state) {
      state.isLoader = true;
    },
    [register.rejected](state) {
      state = { ...initialState, error: true };
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoader = false;
      state.isLoggedIn = true;
    },
    [logIn.pending](state) {
      state.isLoader = true;
      state.error = false;
    },
    [logIn.rejected](state) {
      state = { ...initialState, error: true };
    },
    [logOut.pending](state) {
      state.isLoader = true;
      state.error = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoader = false;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state) {
      state = { ...initialState, error: true };
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoader = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoader = false;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoader = false;
    },
  },
});

export default authSlice.reducer;
