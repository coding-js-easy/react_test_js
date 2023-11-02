import { configureStore } from "@reduxjs/toolkit";

import authSlice, { AuthType } from "./slices/authslice";

export type State = {
  auth: AuthType;
};

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
