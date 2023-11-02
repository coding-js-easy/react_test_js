import { createSlice } from "@reduxjs/toolkit";

export type AuthType = {
  token: string | null;
};

const initialState: AuthType = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
