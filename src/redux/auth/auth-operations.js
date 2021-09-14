import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const errorMessage = (err) =>
  toast.error(`There are some isues. 
  Message: ${err}.`);

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      errorMessage(err);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      errorMessage(err);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (err) {
    errorMessage(err);

    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      token.set(persistedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (err) {
      errorMessage(err);

      return thunkAPI.rejectWithValue();
    }
  }
);
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };
// export const register = createAsyncThunk(
//   "auth/register",
//   async (credentials) => {
//     const { data } = await axios.post("/users/signup", credentials);
//     token.set(data.token);
//     return data;
//   }
// );

// export const logIn = createAsyncThunk("auth/login", async (credentials) => {
//   const { data } = await axios.post("/users/login", credentials);
//   token.set(data.token);
//   return data;
// });

// export const logOut = createAsyncThunk("auth/logout", async () => {
//   await axios.post("/users/logout");
//   token.unset();
// });

// export const fetchCurrentUser = createAsyncThunk(
//   "auth/fetchCurrentUser",
//   async (_, thunkApi) => {
//     const persistedToken = thunkApi.getState().auth.token;
//     token.set(persistedToken);
//     const { data } = await axios.get("/users/current");
//     return data;
//   }
// );
